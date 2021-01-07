class PersonController {
  index(req, res) {
    // [GET] /news
    res.render('person');
  }

  //[GET] /news/:slug
  detail(req, res) {
    // res.send('Trang nay se tra ve thong tin nhan su')
    res.render('person');
  }
}

module.exports = new PersonController();
