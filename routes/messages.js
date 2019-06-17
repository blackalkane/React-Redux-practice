const express = require('express');
const router = express.Router();

class Store {
  constructor() {
    this.data = [
      { id: 0,
        data: 
          { msg : "Let's Go Raptors!!!" }
      },
      { id: 1,
        data: 
          { msg : "GSW Sucks!!!" }
      },
      { id: 2,
        data: 
          { msg : "We The Champion!!!" }
      },
      { id: 3,
        data: 
          { msg : "GGGGGGGGGGGG!!!" }
      }
    ];
    this.index = 4;
  }

  addItem(value) {
    const obj = {
      id: this.index,
      data: value,
    };
    this.index++;
    this.data.push(obj);
    return obj;
  }
  
  update(id, value) {
    var index;
    if (this.data.length === 0) return false;
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) index = i;
    }
    this.data[index].data = value;
    return true;
  }

  delete(id) {
    var index;
    if (this.data.length === 0) return false;
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) index = i;
    }
    this.data.splice(index, 1);
    return true;
  }

  killThemAll() {
    this.index = 0;
    this.data = [];
  }

  getThemAll() {
    return this.data;
  }
}
module.exports = Store;

const faker = new Store();

router.get('/', function(req, res, next) {
  res.json(faker.getThemAll());
});

router.post('/add', function(req, res, next) {
  console.log(req.body);
  if (req.body !== null) {
    const value = faker.addItem(req.body);
    return res.status(200).json(value);
  } else {
    return res.status(400).send('error');
  }
});

router.delete('/remove/:id', function(req, res, next) {
  if (faker.delete(req.params.id)) {
    res.status(200).send('success');
  } else {
    res.status(500).send('error');
  }
});

router.put('/update/:id', function(req, res, next) {
  const id = parseInt(req.params.id);
  if (faker.update(id, req.body)) {
    res.status(200).send('success');
  } else {
    res.status(500).send('error');
  }
});

router.delete('/clear-all', function(req, res, next) {
  faker.killThemAll();
  if (faker.getThemAll().length === 0) {
    res.status(200).send('success');
  } else {
    res.status(500).send('error');
  }
});

module.exports = router;

