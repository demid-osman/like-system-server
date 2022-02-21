const CounterSchema = require('../models/counter.model')

// Create
module.exports.create = function (req, res, next) {
    const name = req.body.name
    const value = req.body.value
    CounterSchema.create(
        { name: name, value: value },
        function (err) {
            if (err) {
                return next(err)
            } else {
                res.send('Created')
            }
        }
    )
}

// Get all
module.exports.getAll = function (req, res, next) {
    CounterSchema.find({})
        .sort({ value: 'desc' })
        .exec(function(err, list) {
            if (err) {
                return next(err)
            } else {
                res.send(list)
            }
        }
    )
}

// Get by ID
module.exports.getOne = function (req, res, next) {
    const id = req.params.id
    CounterSchema.findById(id, function (err, counter) {
        if (err) {
            return next(err)
        } else {
            res.send(counter)
        }
    })
}

// Update by ID
module.exports.update = function (req, res, next) {
    const id = req.params.id
    CounterSchema.findOne({ _id: id}, function (err, counter) {
        if (err) {
            return next(err)
        } else {
            counter.value++
            counter.save(function (err) {
                if (err) {
                    return next(err)
                } else {
                    res.send('Updated')
                }
            })
        }
    })
}

// Delete by ID
module.exports.delete = function (req, res, next) {
    const id = req.params.id
    CounterSchema.findOneAndRemove(id, function (err) {
        if (err) {
            return next(err)
        } else {
            res.send('Deleted')
        }
    })
}