import React, { Component } from 'react';
import './../style.css'
export default class RequestDetail extends Component {
    render() {
        return <div>
            {/* burda verirabanından kullanıcı bilgilerinin detayı çekilecek */}

            <div className='serve-myworks-detail'>
                <label> username</label>

                <label> eşya taşıma</label>
                <p> </p>
                <label>Eşyaların ağırlığı yaklaşık kaç kilogram? </label>
                <p> 30</p>
                <label> Hangisine ihtiyacın var?</label>
                <p>Panelvan (5-13 m3)</p>
                <label> Paketleme ve taşıma yardımı da istiyor musun?</label>
                <p>Evet, tüm eşyayı paketleyin ve taşıyın </p>
                <label> İhtiyacın detayları neler?</label>
                <p>1 orta sehpa 2 küçük yan sehpa 2 küçük boy konsol 1 konsol koşuyolundan alınacak Sancaktepe’ye giderken yol üstünden imeste giriş dükkandan diğer konsol alınacak Sancaktepe’de sehpa alınacak. </p>
                <label> Eşya nereye taşınacak?</label>
                <p> Ankara, Çankaya, Çankaya Mah</p>
                <label>Talep Numarası</label>
                <p>14702317</p>
                <hr />
                <label>1 Teklif Geldi</label>
            </div>

        </div>;
    }
}
