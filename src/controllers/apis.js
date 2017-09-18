

const request = require('request');

const db = require('../models');


/*
 * JSON User API Endpoints
 */

// GET /api/user
function apiUser(req, res) {
  // console.log('GET /api/user');
  // console.log('req.user: ' + req.user);
  if (req.user) {
    db.User.find({'_id': req.user._id}, function(err, users) {
      if (err) {
        res.status(503).send('ERROR:' + err);
      } else {
        res.json(users[0]);
      }
    });
  } else {
    res.status(404).send('user not logged in');
  }
}

// POST /api/user/visited
function apiNewVisited(req, res) {
  // console.log('POST /api/user/visited');
  // console.log('req.user: ' + req.user);
  // console.log('req.body: ' + req.body);
  // console.log('req.body.item: ' + req.body.item);
  if (req.user) {
    //console.log('there is a user');
    // console.log(req.user._id);
    // console.log(newStash);
    db.User.update({_id: req.user._id}, { $push: {visited: req.body} }, function(err, updatedUser) {
      if (err) {
        // console.log('err during update');
        // console.log('err: ' + err);
        res.status(503).send('ERROR::' + err);
      } else {
        res.json(updatedUser);
      }
    });
  }
}

// DELETE /api/user/visited/:id
function apiDeleteVisited(req, res) {
  // console.log('DELETE. /api/user/visited/:id');
  // console.log('req.params.id: ' + req.params.id);
  // console.log('req.user._id: ' + req.user._id);
  // we need to remove it from the user's visited list
  db.User.findByIdAndUpdate({ _id: req.user._id },
      { $pull: { visited: { _id: req.params.id } } }, 
      function(err, updatedUser) {
    if (err) {
      res.status(404).send('could not remove that item from the visited list');
    } else {
      // console.log(res);
      res.json(updatedUser);
    }
  });
}

// POST /api/user/wishlist
function apiNewWishlist(req, res) {
  // console.log('POST /api/user/wishlist');
  // console.log('req.user: ' + req.user);
  // console.log('req.body: ' + req.body);
  if (req.user) {
    //console.log('there is a user');
    // console.log(req.user._id);
    db.User.update({_id: req.user._id}, { $push: {wishlist: req.body} }, function(err, updatedUser) {
      if (err) {
        // console.log('err during update');
        // console.log('err: ' + err);
        res.status(503).send('ERROR::' + err);
      } else {
        res.json(updatedUser);
      }
    });
  }
}

// DELETE /api/user/wishlist/:id
function apiDeleteWishlist(req, res) {
  // console.log('DELETE. /api/user/wishlist/:id');
  // console.log('req.params.id: ' + req.params.id);
  // console.log('req.user._id: ' + req.user._id);
  // we need to remove it from the user's wish list
  db.User.findByIdAndUpdate({ _id: req.user._id },
      { $pull: { wishlist: { _id: req.params.id } } }, 
      function(err, updatedUser) {
    if (err) {
      res.status(404).send('could not remove that item from the wish list');
    } else {
      // console.log(res);
      res.json(updatedUser);
    }
  });
}


/*
 * JSON Festival API Endpoints
 */

// GET /api                  documentation
function apiDoc(req, res) {  
  //console.log('GET /api');
  res.json({
    message: 'Welcome to the WoolyWatch festival list!',
    documentation_url: 'https://github.com/SpindleMonkey/wooly-watch/api.md',
    base_url: 'http://localhost:3000',
    notes: 'If you search for a festival with more than one word in it\'s name, use \'%20\' for the space between words. If you\'re updating the aliases or when field, use \', \' to separate fields.',
    endpoints: [
      {method: 'GET', path: '/api', description: 'Describes available endpoints'},
      {method: 'GET', path: '/api/festival', description: 'Lists all wool festivals'},
      {method: 'GET', path: '/api/festival/:name', description: 'Lists info for a single wool festival'},
      {method: 'GET', path: '/api/festival/all', description: 'Lists all info for all festivals'},
      {method: 'POST', path: '/api/festival', description: 'Add a new wool festival'},
      {method: 'PUT', path: 'api/festival/:name', description: 'Update one festival'},
      {method: 'DELETE', path: '/api/festival/:name', description: 'Delete a festival'}
    ]
  });
}

// GET /api/festival            list of wool festivals (names only)
function apiIndex(req, res) {
  //console.log('GET /api/festival');
  // return the list of wool festivals
  db.Festival.find({}, function(err, festivals) {
    if (err) {
      res.status(404).send('ERROR::' + err);
    } else {
      let festivalNames = [];
      festivals.forEach(function(singleFestival) {
        festivalNames.push(singleFestival.name);
      });

      festivalNames.sort();
      res.json(festivalNames);
    }
  });
}

// GET /api/festival/all      all the info for all the festivals
function apiShowAll(req, res) {
  //console.log('GET /api/festival/all');
  db.Festival.find({}, function(err, allFestivals) {
    if (err) {
      res.send('ERROR::' + err);
    } else {
      res.json({festivals: allFestivals});
    }
  });
}

// GET /api/festival/:name      lists info for the specified festival
function apiShow(req, res) {
  //console.log('GET /api/festival/:name');
  // return JSON object of specified festival
  db.Festival.find({name: req.params.name}, function(err, oneFestival) {
    if (err) {
      res.send('ERROR::' + err);
    } else {
      res.json({festivals: oneFestival});
    }
  });
}

// POST /api/festival           add a new festival
function apiNew(req, res) {
  //console.log('POST /api/festival');
  // create a new festival in the db
  //console.log(req.body);
  if (!req.body.name) {
    res.status(503).send('cannot add a new festival without a name');
  } else if (!req.body.state) {
    res.status(503).send('cannot add a new festival without a state');
  } else if (!req.body.when) {
    res.status(503).send('cannot add a new festival without specifying when the festival occurs');
  } else if (!req.body.url) {
    res.status(503).send('cannot add new festival without a url');
  } else {
    let festival = new db.Festival({
      name: req.body.name,
      aliases: [],
      location: req.body.location || '',
      address: req.body.address || '',
      state: req.body.state,
      region: req.body.region || '',
      when: req.body.when || '',
      url: req.body.url,
      workshops: req.body.workshops || false,
      // ravelryGroup: String,   // TODO: not implemented
      // nearestAirport: String, // TODO: not implemented
      // animalShows: [String],  // TODO: not implemented
   });

    //console.log('r.b.a: ' + req.body.aliases);
    let aliasList = req.body.aliases.split(', ');
    //console.log('aliasList: ' + aliasList);
    //console.log('aliasList.length: ' + aliasList.length);

    //console.log(festival.aliases);
    for (let i = 0; i < aliasList.length; i++) {
      festival.aliases.push(aliasList[i]);
    }

    //console.log(festival);
    db.Festival.create(festival, function(err, festival) {
      if (err) {
        res.status(503).send('could not add new festival. sorry.');
      } else {
        res.json(festival);
      }
    });
  }

}

// PUT /api/festival/:name      update a festival
function apiUpdate(req, res) {
  // console.log('PUT /api/festival/:name');
  // console.log(req.params.name);
  // console.log(req.body);

  // update the specified festival
  db.Festival.find({'name': req.params.name}, function(err, festival) {
    //console.log(festival);
    if (err) {
      res.status(404).send('ERROR: festival not found; you probably need to add this festival');
    } else {
      if (req.body.aliases) {
        // get the list of  aliases
        let aliasList = req.body.aliases.split(', ');
        // we're replacing the current list of aliases with the new list
        req.body.aliases = [];
        for (let i = 0; i < aliasList.length; i++) {
          req.body.aliases.push(aliasList[i]);
        }
        //console.log('aliasList: ' + req.body.aliasList);
      }

      //console.log(festival[0]._id);
      db.Festival.update({ '_id': festival[0]._id }, { $set: req.body }, function(err, updatedFestival) {
        if (err) {
          res.status(503).send('ERROR: could not update festival info');
        } else {
          res.json(updatedFestival);
        }
      });
    }

  });
}

// DELETE /api/festival/:name   delete festival
function apiDelete(req, res) {
  //console.log('DELETE /api/festival/:name');
  
  // delete the specified festival
  db.Festival.remove({'name': req.params.name}, function(err, lostFestival) {
    if (err) {
       res.status(404).send('could not remove that festival');
     } else {
      res.json(lostFestival);
     }
  });
}


module.exports = {
  apiUser: apiUser,
  apiNewVisited: apiNewVisited,
  apiDeleteVisited: apiDeleteVisited,
  apiNewWishlist: apiNewWishlist,
  apiDeleteWishlist: apiDeleteWishlist,
  apiDoc: apiDoc,
  apiIndex: apiIndex,
  apiShow: apiShow,
  apiShowAll: apiShowAll,
  apiNew: apiNew,
  apiUpdate: apiUpdate,
  apiDelete: apiDelete
};

