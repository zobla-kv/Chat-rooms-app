module.exports = function cors(req, res, next) {
  const origin = req.header('origin');
  console.log('origin: ', origin);
  if (origin && origin.includes('localhost')) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', 'Content-type');
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT');

    if (req.method === 'OPTIONS') {
      res.sendStatus(204);
      return;
    }
  }
  next();
};