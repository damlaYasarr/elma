
const qa = require('../../model/datainfo');
const { pool } = require('../../services/verification/initServices')

//her temizlik çeşidinin soruları ve cevaplarını çektiğimiz
//metot yazıcaz. 
//cevabı veren userle bağlantı kurucaz. yani userin cevaplarına kayıt olacak. 
//resim yükleme metodunu yazacağız. 
//doldurulan hizmet eğer iş ayarlanıp bırakıldı ise iptal  kısmına eklenecek. 
//iş alınıp anlaşıldı ise anlaşıldı kısmına eklenecek. 

const questionApartClean= async(req,res)=>{
    try{
      const {id}=req.params; 
      const text= `select * from qas where id=$1`
      const request= await pool.query(text, [id,])
       return res.send(request.rows);

    }catch(err){
        console.log(err)
    }
    
}


module.exports={

    questionApartClean
}