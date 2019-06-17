class Database {

  constructor(initialData) {
    this._id = 0;
    this._db = [];
    if (initialData.length > 0) {
      initialData.forEach(entry => {
        const obj = {
          id: this._id,
          data: entry,
        };
        this._db.push(obj);
        this._id++;
      });
    }
  }

  add(entry) {
    const obj = {
      id: this._id,
      data: entry,
    };
    this._id++;
    this._db.push(obj);
    return obj;
  }
  
  delete(id) {
    var idx;
    if (this._db.length === 0) idx = -1;
    for (var i = 0; i < this._db.length; i++) {
      if (this._db[i] === id) idx = i;
    }
    
    if (idx !== -1) {
      this._db.splice(idx, 1);
      return true;
    } else {
      return false;
    }
  }

  clearAll() {
    this._id = 0;
    this._db = [];
  }

  query(id) {
    const idx = this._search(id);
    if (idx !== -1) {
      return this._db[idx];
    } else {
      return null;
    }
  }

  getAll() {
    return this._db;
  }

}

module.exports = Database;
