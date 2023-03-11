
const express=require('express')
const router=express.Router();
const authModel=require('../models/author')


/*-----------------------------get all ----------------- */

router.get('/',async (req, res) => {
  try {
    const auths=await authModel.find({})
    return res.json(auths)
   
  } catch (err) {
    res.status(500).send(err)}
  })

/*-----------------------------get :id ----------------- */
router.get('/:id', (req, res) => {
  authModel.find({_id:req.params.id},(err,auths)=>{
    if(!err){
    return res.json(auths)
    }
    res.status(500).send(err)
    })
  })


/*-----------------------------post ----------------- */
 router.post('/', (req, res) => {

  authModel.create(req.body, (err, createdauth) => {
          if (!err) return res.json(createdauth)
          res.status(500).send(err)
      }) 

})

/*-----------------------------put :id----------------- */
router.put('/:id', (req, res) => {
  authModel.updateOne({_id:req.params.id},
    {$set:{firstName:req.body.firstName,
      lastName:req.body.lastName,
      DateOfBirth:req.body.DateOfBirth}}
    ,(err,auths)=>{
    if(!err){
      return res.send(`update of id ${req.params.id}  done`)
    }
    res.status(500).send(err)
    })

  })
  
  /*-----------------------------delete :id----------------- */
router.delete('/:id', (req, res) => {
  authModel.remove({_id:req.params.id},(err,auths)=>{
    if(!err){
    return res.send(`remove of id ${req.params.id} name is ${req.body.firstName} done`)
    }
    res.status(500).send(err)
    })

  })



  module.exports=router