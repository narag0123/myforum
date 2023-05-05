export default function testAPI(req, res) {
    console.log(req.query);
    return res.status(200).json();
}
