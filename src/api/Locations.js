/*Info from FourSquare*/

const CLIENT_ID = "QIALEIHAYHVCTCPNTP2EONINKKUUHPI1FERJWUTYPLRVCQQM";
const CLIENT_SECRET = "ADVTEIWMHJYB2FXFQNPNTDZSDRECRM4UUC3ND55WPJ3QSE2V";

/*
from https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
by - TJ VanToll
*/

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

/* Input of foursquare credentials and also location w/ food details*/
export const getLocations = () => {
  return fetch(`https://api.foursquare.com/v2/venues/explore?cat=food&near=phoenix&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323&query=coffee`)
    .then(handleErrors)
    .then(response => response.json())
    .then(result => result.response.groups[0].items)
    .catch(error => console.log(error));
};
