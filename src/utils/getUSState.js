const USStates = {
  'alabama': 'al',
  'alaska': 'ak',
  'arizona': 'az',
  'arkansas': 'ar',
  'california': 'ca',
  'colorado': 'co',
  'connecticut': 'ct',
  'delaware': 'de',
  'florida': 'fl',
  'georgia': 'ga',
  'hawaii': 'hi',
  'idaho': 'id',
  'illinois': 'il',
  'indiana': 'in',
  'iowa': 'ia',
  'kansas': 'ks',
  'kentucky': 'ky',
  'louisiana': 'la',
  'maine': 'me',
  'maryland': 'md',
  'massachusetts': 'ma',
  'michigan': 'mi',
  'minnesota': 'mn',
  'mississippi': 'ms',
  'missouri': 'mo',
  'montana': 'mt',
  'nebraska': 'ne',
  'nevada': 'nv',
  'new hampshire': 'nh',
  'new jersey': 'nj',
  'new mexico': 'nm',
  'new york': 'ny',
  'north carolina': 'nc',
  'north dakota': 'nd',
  'ohio': 'oh',
  'oklahoma': 'ok',
  'oregon': 'or',
  'pennsylvania': 'pa',
  'rhode island': 'ri',
  'south carolina': 'sc',
  'south dakota': 'sd',
  'tennessee': 'tn',
  'texas': 'tx',
  'utah': 'ut',
  'vermont': 'vt',
  'virginia': 'va',
  'washington': 'wa',
  'west virginia': 'wv',
  'wisconsin': 'wi',
  'wyoming': 'wy'
}; 
const defaultCountryCode = 840;

const getUSState = (input) => {
    let statename = input;
    let statecode = '';
    for (let key in USStates) {
        if(key === input.toLowerCase() || USStates[key] === input.toLowerCase()) {
          statecode = 'US-'+ USStates[key];
          return {statename, statecode};
        };

      console.log('Error: Invalid State Name.');
    }};

export { getUSState, defaultCountryCode };