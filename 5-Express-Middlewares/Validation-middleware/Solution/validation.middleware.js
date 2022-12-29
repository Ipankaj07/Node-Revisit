const validationMiddleware = (req, res, next) => {
  if (req.url === "/movies" && req.method === "POST") {
    const { id, name, rating, description, genre, cast } = req.body;

    let fields = {
      id: "ID",
      name: "Name",
      rating: "Rating",
      description: "Description",
      genre: "Genre",
      cast: "Cast",
    };

    let fieldType = {
      id: "Number",
      name: "String",
      rating: "Number",
      description: "String",
      genre: "String",
    };

    for (let field in fields) {
      if (!req.body[field]) {
        return res.status(400).json({
          error: `${fields[field]} is required`,
        });
      }
    }

    // cast
    if (!Array.isArray(cast)) {
      return res.status(400).json({
        error: `cast should be of type Array`,
      });
    }

    for (let field in fieldType) {
      if (typeof req.body[field] !== fieldType[field].toLowerCase()) {
        return res.status(400).json({
          error: `${fields[field]} should be of type ${fieldType[field]}`,
        });
      }
    }
    
    next();
  }
};

module.exports = validationMiddleware;