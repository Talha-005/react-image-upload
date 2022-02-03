const json = require('../utils/jsonresponse');

exports.getImage = async (req, res) => {
    json(res, 200, `get images`, null);
}

exports.postImage = async (req, res) => {
    if (req.file === undefined) return json(res, 500, `Please upload image`, null);
    json(res, 201, `Image uploaded successfully`, `/public/upload/${req.file.filename}`);
}
