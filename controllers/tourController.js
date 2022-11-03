const Tour = require('../models/tourModel');

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    // results: tours.length,
    data: {
      // tours,
    },
  });
};

exports.getTour = (req, res) => {
  // const findTour = tours.find(tour => tour.id === parseInt(req.params.id, 10));

  res.status(200).json({
    status: 'success',
    data: {
      // findTour,
    },
  });
};

exports.createTour = (req, res) => {
  res.status(201).json({
    status: 'success',
    // data: {
    // tour: newTour,
    // },
  });
};

exports.updateTour = (req, res) =>
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });

exports.deleteTour = (req, res) =>
  res.status(204).json({
    status: 'success',
    data: null,
  });
