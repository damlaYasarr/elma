const Op = require('sequelize').Op;
const { sequelize, pool } = require("../services/verification/initServices");
const Categories = require("./../model/kategories")


const addCategories = (async (req, res) => {
    try {
        let { temizlik, nakliyat, tadilat,
            tamir, ozel_Ders,
            saglik, dugun, kurumsal, organizasyon, evcil_hayvanlar, oto_ve_arac } = req.body;
            const category = await Categories.create({
            temizlik: temizlik,
            nakliyat: nakliyat,
            tadilat: tadilat,
            tamir: tamir,
            ozel_Ders: ozel_Ders,
            saglik: saglik,
            dugun: dugun,
            kurumsal: kurumsal,
            organizasyon: organizasyon,
            evcil_hayvanlar: evcil_hayvanlar,
            oto_ve_arac: oto_ve_arac
        });
        return res.status(200).send("başarı ile eklendi")

    } catch (err) {
        console.log("err1 ", err)
        return res.status(500);
    }



})
const searchServe=(async(req,res)=>{
    try {
       const test = 
       '(select evcil_hayvanlar as hepsi from kategories where evcil_hayvanlar IS NOT NULL)'+ 
       'UNION'+
       '(select organizasyon from kategories where organizasyon IS NOT NULL) '+
       'UNION'+
       '(select temizlik from kategories where temizlik IS NOT NULL) '+
       'UNION'+
       '(select tamir from kategories where tamir IS NOT NULL)'+
       'UNION'+
       '(select tadilat from kategories where tadilat IS NOT NULL)'+
       'UNION'+
       '(select ozel_ders from kategories where ozel_ders IS NOT NULL)'+
       'UNION'+
       '(select saglik from kategories where saglik IS NOT NULL)'+
       'UNION'+
       '(select dugun from kategories where dugun IS NOT NULL)'+
       'UNION'+
       '(select kurumsal from kategories where kurumsal IS NOT NULL)'
       const getall=await pool.query(test)
       const {hepsi}=req.body;
       
        return res.status(200).send(getall.rows)
       
       
        

	} catch (e) {
		console.error(e.message);
		res.status(501).json("Sever Error");
	}
      
})
const getTemizlik=(async(req,res)=>{
    try{
        
    const text='SELECT temizlik from kategories WHERE temizlik IS NOT NULL  '
    const result=await pool.query(text)
      
    return res.status(201).send(result.rows)  
    }catch(err){
          res.status(500).send(err)
    }     
})
const getAllTemizlik=(async(req,res)=>{
    try{
        
    const text='SELECT temizlik from kategories WHERE temizlik IS NOT NULL'
    const result=await pool.query(text)
      
    return res.status(201).send(result.rows)  
    }catch(err){
          res.status(500).send(err)
    }     
})
const getNakliyat=(async(req,res)=>{
    try{
        
    const text='SELECT nakliyat from kategories WHERE nakliyat IS NOT NULL'
    const result=await pool.query(text)
      
    return res.status(201).send(result.rows)  
    }catch(err){
          res.status(500).send(err)
    }     
})
const getTadilat=(async(req,res)=>{
    try{
        
    const text='SELECT tadilat from kategories WHERE tadilat IS NOT NULL'
    const result=await pool.query(text)
      
    return res.status(201).send(result.rows)  
    }catch(err){
          res.status(500).send(err)
    }     
})
const getTamir=(async(req,res)=>{
    try{
        
    const text='SELECT tamir from kategories WHERE tamir IS NOT NULL'
    const result=await pool.query(text)
      
    return res.status(201).send(result.rows)  
    }catch(err){
          res.status(500).send(err)
    }     
})
const getOzelders=(async(req,res)=>{
    try{
        
    const text='SELECT ozel_ders from kategories WHERE ozel_ders IS NOT NULL'
    const result=await pool.query(text)
      
    return res.status(201).send(result.rows)  
    }catch(err){
          res.status(500).send(err)
    }     
})
const getSaglk=(async(req,res)=>{
    try{
        
    const text='SELECT saglik from kategories WHERE saglik IS NOT NULL'
    const result=await pool.query(text)
      
    return res.status(201).send(result.rows)  
    }catch(err){
          res.status(500).send(err)
    }     
})
const getdgn=(async(req,res)=>{
    try{
        
    const text='SELECT dugun from kategories WHERE dugun IS NOT NULL'
    const result=await pool.query(text)
      
    return res.status(201).send(result.rows)  
    }catch(err){
          res.status(500).send(err)
    }     
})
const getdiger=(async(req,res)=>{
    try{
        
    const text='(select evcil_hayvanlar as diger from kategories where evcil_hayvanlar IS NOT NULL) UNION (select organizasyon from kategories where organizasyon IS NOT NULL) UNION (select oto_ve_arac from kategories where oto_ve_arac IS NOT NULL) '
    const result=await pool.query(text)
      
    return res.status(201).send(result.rows)  
    }catch(err){
          res.status(500).send(err)
    }     
})
module.exports = { addCategories,
    searchServe,
     getTemizlik ,
     getdgn,
      getNakliyat,
    getSaglk,
    getTadilat,
    getTamir,
    getOzelders,
     getdiger};