var customerName = 'bob'

function upperCaseCustomerName () {
  return customerName = customerName.toUpperCase()
}

function setBestCustomer () {
  return bestCustomer = `not bob`
}

function overwriteBestCustomer () {
  return bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'jim'

function changeLeastFavoriteCustomer () {
  return leastFavoriteCustomer = 'rick'
}

function attemptTwoFavoriteCustomers () {
  const favoriteCustomer = 'bar';
  const favoriteCustomer = 'not bar';
}
