
const { Sequelize } = require("sequelize");
const { sequelize } = require('../services/verification/initServices');

const ArrayResponses = sequelize.define('arrayresponses', {
    responses_array_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    kac_tane_daire: {
        type: Sequelize.STRING,
    },
    hangi_hizmet: {
        type: Sequelize.STRING,

    },
    kapici_var_mi: {
        type: Sequelize.STRING,

    },
    evin_büyüklügü_nedir: {
        type: Sequelize.STRING,
    },
    kac_banyo: {
        type: Sequelize.STRING,
    },
    kac_saat_temizlik: {
        type: Sequelize.STRING,
    },
    hangi_siklikla_yapilsin: {
        type: Sequelize.STRING,
    },
    evde_kedi_köpek: {
        type: Sequelize.STRING,
    }, kaç_adet_tekli_koltuk: {
        type: Sequelize.STRING,
    }, kaç_adet_ikili_koltuk: {
        type: Sequelize.STRING,
    }, kac_adet_üclü: {
        type: Sequelize.STRING,
    }, kac_adet__l: {
        type: Sequelize.STRING,
    }, koltuklar_minderli_mi: {
        type: Sequelize.STRING,
    }, kac_adet_sandalye: {
        type: Sequelize.STRING,
    }, kac_odalı_ev_esyasi: {
        type: Sequelize.STRING,
    }, hnagisine_ihtiyacin_var: {
        type: Sequelize.STRING,
    }, esya_nasil_tasinacak: {
        type: Sequelize.STRING,
    }, paketleme_icin_yardim: {
        type: Sequelize.STRING,
    }, emitia_sigortasi: {
        type: Sequelize.STRING,
    }, ne_zaman_tasinacaksin: {
        type: Sequelize.STRING,
    }, kac_oda: {
        type: Sequelize.STRING,
    }, ev_hangi_sebepten_bos: {
        type: Sequelize.STRING,
    }, temizlenecek_kac_daire_var: {
        type: Sequelize.STRING,
    }, apart_kac_katli: {
        type: Sequelize.STRING,
    }, hangi_hizmet_dahil: {
        type: Sequelize.STRING,
    }, temizlik_hangi_siklikla_yapilsin: {
        type: Sequelize.STRING,
    }, bahce_kac_metre: {
        type: Sequelize.STRING,
    }, bahce_hangi_hizmet_istersin: {
        type: Sequelize.STRING,
    }, sulama_sistemi_nedir: {
        type: Sequelize.STRING,
    }




});


module.exports = ArrayResponses;