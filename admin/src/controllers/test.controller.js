const testController = (req, res) => {
  res.render('index', { name: 'Da' });
};

module.exports = { testController };
