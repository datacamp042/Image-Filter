"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const util_1 = require("../../../../util/util");
const router = express_1.Router();
// @TODO1 IMPLEMENT A RESTFUL ENDPOINT
// GET /filteredimage?image_url={{URL}}
// endpoint to filter an image from a public url.
// IT SHOULD
//    1
//    1. validate the image_url query
//    2. call filterImageFromURL(image_url) to filter the image
//    3. send the resulting file in the response
//    4. deletes any files on the server on finish of the response
// QUERY PARAMATERS
//    image_url: URL of a publicly accessible image
// RETURNS
//   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]
/**************************************************************************** */
router.get('/filteredimage/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { image_url } = req.query;
        // Check whether url can be found. 
        if (!image_url) {
            return res.status(400)
                .send('No URL found. Enter one.');
        }
        // Check whether url contains a picture. 
        if (image_url.match(/\.(jpeg|jpg|gif|png)$/) == null) {
            return res.status(400)
                .send('Bad format (no picture format). Try again.');
        }
        // filter image using given function and save path
        var filtered_image_path = yield util_1.filterImageFromURL(image_url);
        // create array for this path (necessary for function)
        let array_strings = [filtered_image_path];
        // Send filtered image
        res.sendFile(filtered_image_path, () => util_1.deleteLocalFiles(array_strings));
        // return 200 if all works out. 
        return res.status(200);
    }
    catch (err) {
        return res.status(400).send('Error occured.');
    }
}));
//router.get("/", async (req, res) => {
//  return res.status(400).send('Enter URL.');
//}
//! END @TODO1
exports.ImageProcessingRouter = router;
//# sourceMappingURL=image_processing.router.js.map