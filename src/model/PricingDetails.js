/**
 * Lyft API
 * Drive your app to success with Lyft's API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api-support@lyft.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The PricingDetails model module.
* @module model/PricingDetails
* @version 1.0.0
*/
export default class PricingDetails {
    /**
    * Constructs a new <code>PricingDetails</code>.
    * @alias module:model/PricingDetails
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PricingDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PricingDetails} obj Optional instance to populate.
    * @return {module:model/PricingDetails} The populated <code>PricingDetails</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PricingDetails();

            
            
            

            if (data.hasOwnProperty('base_charge')) {
                obj['base_charge'] = ApiClient.convertToType(data['base_charge'], 'Number');
            }
            if (data.hasOwnProperty('cancel_penalty_amount')) {
                obj['cancel_penalty_amount'] = ApiClient.convertToType(data['cancel_penalty_amount'], 'Number');
            }
            if (data.hasOwnProperty('cost_minimum')) {
                obj['cost_minimum'] = ApiClient.convertToType(data['cost_minimum'], 'Number');
            }
            if (data.hasOwnProperty('cost_per_mile')) {
                obj['cost_per_mile'] = ApiClient.convertToType(data['cost_per_mile'], 'Number');
            }
            if (data.hasOwnProperty('cost_per_minute')) {
                obj['cost_per_minute'] = ApiClient.convertToType(data['cost_per_minute'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('trust_and_service')) {
                obj['trust_and_service'] = ApiClient.convertToType(data['trust_and_service'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The base charge of the trip
    * @member {Number} base_charge
    */
    base_charge = undefined;
    /**
    * The charge amount if cancel penalty is involved
    * @member {Number} cancel_penalty_amount
    */
    cancel_penalty_amount = undefined;
    /**
    * The minimum charge for the trip
    * @member {Number} cost_minimum
    */
    cost_minimum = undefined;
    /**
    * The cost per mile
    * @member {Number} cost_per_mile
    */
    cost_per_mile = undefined;
    /**
    * The cost per minute
    * @member {Number} cost_per_minute
    */
    cost_per_minute = undefined;
    /**
    * The ISO 4217 currency code for the amount (e.g. USD)
    * @member {String} currency
    */
    currency = undefined;
    /**
    * Service fee
    * @member {Number} trust_and_service
    */
    trust_and_service = undefined;








}


