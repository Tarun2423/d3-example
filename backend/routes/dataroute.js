const router=require("express").Router()
const dataRoutes=require("../models/data")
//create user
router.post("/set",async(req,res)=>{
    try{
        req.body.forEach(element => {
            const newdata= new dataRoutes({
                end_year:element.end_year,
                intensity:element.intensity,
                sector:element.sector,
                topic:element.topic,
                insight:element.insight,
                url:element.url,
                region:element.region,
                start_year:element.start_year,
                impact:element.impact,
                added:element.added,
                published:element.published,
                country:element.country,
                relevance:element.relevance,
                pestle:element.pestle,
                source:element.source,
                title:element.title,
                likelihood:element.likelihood,
            })
            const saveduser=newdata.save()
        });
       
      return  res.status(200).json()
    }
    catch(err){
       return res.status(500).json(err)

    }
})

router.post("/getdata",async(req, res)=>{
    try{
      const page=(req.query.p)*5
       const reqdata=await dataRoutes.find().sort({start_year:1}).skip(page).limit(5)
       return res.status(200).json(reqdata)
    }
    catch(err){
      return  res.status(500).json(err)

    }

})



















module.exports=router