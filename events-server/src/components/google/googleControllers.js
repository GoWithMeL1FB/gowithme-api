import gma from 'google-distance-matrix';
const api = process.env.GOOGLEAPI;
gma.key(api);
gma.units('imperial');

export const getDistance = (req, res) => {
    console.log('is the function getting invoked?????')
    console.log('this is req.body', req.query)
    const origin = req.query.origin;
    const destination = req.query.destination;

    gma.matrix(origin, destination, function(err, distance) {
      if (!err)

        console.log(distance);
        res.send(distance);
    })
}