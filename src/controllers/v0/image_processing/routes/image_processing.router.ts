import { Router, Request, Response } from 'express';
import {filterImageFromURL, deleteLocalFiles} from '../../../../util/util';
import fs from 'fs'; 

const router: Router = Router();

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

  router.get('/filteredimage/',
    async (req: Request, res: Response) => {
      try{
        let { image_url } = req.query; 
        
        // Check whether url can be found. 
        if (! image_url) {
            return res.status(400)
                      .send('No URL found. Enter one.');
        }
        
        // Check whether url contains a picture. 
        if (image_url.match(/\.(jpeg|jpg|gif|png)$/) == null){
            return res.status(400)
                    .send('Bad format (no picture format). Try again.');
        }
        

        // filter image using given function and save path
        var filtered_image_path = await filterImageFromURL(image_url);
        
        // create array for this path (necessary for function)
        let array_strings:string[] = [filtered_image_path]; 
        // Send filtered image
        res.sendFile(filtered_image_path, ()=> deleteLocalFiles(array_strings)); 
        
        // return 200 if all works out. 
        return res.status(200);

      }
      catch (err){
        return res.status(400).send('Error occured.')
      }
        
    }
  
  
  )
  
  //router.get("/", async (req, res) => {
    //  return res.status(400).send('Enter URL.');
  //}
  //! END @TODO1
  

export const ImageProcessingRouter: Router = router;