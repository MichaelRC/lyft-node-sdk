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
import RideTypeEnum from './RideTypeEnum';





/**
* The Eta model module.
* @module model/Eta
* @version 1.0.0
*/
export default class Eta {
    /**
    * Constructs a new <code>Eta</code>.
    * Estimated Time of Arrival
    * @alias module:model/Eta
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Eta</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Eta} obj Optional instance to populate.
    * @return {module:model/Eta} The populated <code>Eta</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Eta();

            
            
            

            if (data.hasOwnProperty('ride_type')) {
                obj['ride_type'] = RideTypeEnum.constructFromObject(data['ride_type']);
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('eta_seconds')) {
                obj['eta_seconds'] = ApiClient.convertToType(data['eta_seconds'], 'Number');
            }
            if (data.hasOwnProperty('eta_seconds_max')) {
                obj['eta_seconds_max'] = ApiClient.convertToType(data['eta_seconds_max'], 'Number');
            }
            if (data.hasOwnProperty('is_valid_estimate')) {
                obj['is_valid_estimate'] = ApiClient.convertToType(data['is_valid_estimate'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/RideTypeEnum} ride_type
    */
    ride_type = undefined;
    /**
    * A human readable description of the ride type
    * @member {String} display_name
    */
    display_name = undefined;
    /**
    * Estimated seconds for a driver to arrive
    * @member {Number} eta_seconds
    */
    eta_seconds = undefined;
    /**
    * Estimated upper bound of seconds for a driver to arrive
    * @member {Number} eta_seconds_max
    */
    eta_seconds_max = undefined;
    /**
    * The validity of the ETA estimate returned
    * @member {Boolean} is_valid_estimate
    */
    is_valid_estimate = undefined;








}


