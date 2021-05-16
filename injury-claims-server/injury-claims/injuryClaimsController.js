const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const injuryClaimsModel = require('./injuryClaimsModel');
const injuryClaim = injuryClaimsModel.getInjuryClaimSchema();

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', async (req, res) => {

    let injuryClaims = null;

    let insuranceCompanyQuery = req.query.insuranceCompany;

    let claimIdQuery = req.query.claimId;

    let zipCodeQuery = req.query.zipCode;

    if(req.query.claimId){
        injuryClaims = await injuryClaim.find({_id:claimIdQuery});
    }

    else if (req.query.insuranceCompany){
        injuryClaims = await injuryClaim.find({insuranceCompany : insuranceCompanyQuery});
    }

    else if (req.query.zipCode){
        injuryClaims = await injuryClaim.find({zipCode:zipCodeQuery});
    }

    else {
    injuryClaims = await injuryClaim.find({});
    }

    let claims = injuryClaims.map(c => {
        return {
            claimId : c._id,
            injuryType: c.injuryType,
            insuranceCompany: c.insuranceCompany,
            dateOfInjury: c.dateOfInjury,
            propertyDamageAmount: c.propertyDamageAmount,
            treatment: c.treatment,
            treatmentWeeks: c.treatmentWeeks,
            insuranceCompanyInitialOfferAmount: c.insuranceCompanyInitialOfferAmount,
            settlementAmount: c.settlementAmount,
            zipCode : c.zipCode
        }
    })

    res.status(200).json(claims);
})



router.post('/', async (req, res) => {
    let newClaim = new injuryClaim({
        injuryType: req.body.injuryType,
        insuranceCompany: req.body.insuranceCompany,
        dateOfInjury: req.body.dateOfInjury,
        propertyDamageAmount: req.body.propertyDamageAmount,
        treatment: req.body.treatment,
        treatmentWeeks: req.body.treatmentWeeks,
        insuranceCompanyInitialOfferAmount: req.body.insuranceCompanyInitialOfferAmount,
        settlementAmount: req.body.settlementAmount,
        zipCode : req.body.zipCode
    })
    newClaim.save()
    res.status(201).send()
})

module.exports = router