import gma from 'google-distance-matrix';
const api = process.env.GOOGLEAPI;
gma.key(api);


export const getDistance = (req, res) => {
    gma.matrix(['40.6655101,-73.89188969999998'], ['34.108731021824674, -117.98608303070067'], function(err, distance) {
      if (!err)

        console.log(distance);
        res.send(distance);
    })
}