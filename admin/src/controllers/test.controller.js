const testController = (req, res) => {
  const cookie = req.cookies;
  res.render('index', cookie);
};

module.exports = { testController };
