const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

let model = null;

const injuryClaimSchema = new Schema({

    injuryType : String,
    insuranceCompany : String,
    dateOfInjury : Date,
    propertyDamageAmount : Number,
    treatment : String,
    treatmentWeeks : Number,
    insuranceCompanyInitialOfferAmount : Number,
    settlementAmount : Number,
    zipCode : String
},{collation : 'injuryClaims'})

module.exports.getInjuryClaimSchema = ()=>{
    model = Mongoose.model('injuryClaim',injuryClaimSchema)
    return model;
}