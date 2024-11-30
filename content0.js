import React from 'react';
import Carusel from '../carusel';
import Video from '../video/video'
import Image from '../image';
import Jorj_lukas from '../../img/Jorj_lukas.jpg';
import ilon_mask from '../../img/Ilon_Mask.webp';
import Bill_Geic from '../../img/Bill_Geic.jpg';
const Content = ()=>{
    return(
        <div className="item-content active" id="item-1-content">
            <main>
                <section className='slogan'>
                <Video />
                <div className='slogan_overlay'>
                    <h1>JOPOTIP</h1>
                    <h3>Дешевые логотипы для дешевых компаний</h3>
                    <button className='slogan_ordered'>Заказать дизайн</button>
                </div>
                </section>

                <section className='Carusel'>
                    <h3 className='example'>Наши самые известные клиенты</h3>
                    <div className='Carusel_carusel'><Carusel/></div>
                </section>
                <section className='quote'>
                    <div className='quote_one'>
                    <div className='quote_heading'>
                        <h3>
                        Великие деятели говорили о нас
                        </h3>
                    </div>
                    <div className='quote_quotes'>
                        <div className='quote_quotes_1'>
                            <div className='quote_quotes_foto'>
                                <Image image={Bill_Geic}/>
                            </div>
                        
                        <p>
                        “Каждый раз когда JOPOTIP выпускает новый дизайн, наступает новая эпоха”<br></br>Билл Гейтс.
                        </p>
                        </div>
                        <div className='quote_quotes_2'>
                            <div className='quote_quotes_foto'>
                                <Image image={ilon_mask}/>
                            </div>
                        
                        <p>
                        “Я просто худею с их дизайнов. Хочу пригласить их в свою компанию,
                        но боюсь что они откажется.”<br></br>Илон Маск.
                        </p>
                        </div>
                        <div className='quote_quotes_1'>
                            <div className='quote_quotes_foto'>
                                <Image image={Jorj_lukas}/>
                            </div>
                        
                        <p>
                        “Мало кто знает, но на создание звёздных войн в 1977 меня вдохновили именно их дизайн.
                        Для меня они настоящие мастера джедаи.”<br></br>Джордж Лукас
                        </p>
                        </div>
                        
                    </div>
                    </div>
                    
                </section>
                <section className='dreams'>
                    <h3 className='dreams_h3'>Наша команда</h3>
                    <div className='dreams_partner'>
                        <div className='dreams_partner_stolbec'>
                            <p className='dreams_partner_p'>Король сингл драйв</p>
                            <p className='dreams_partner_p'>Sink</p>
                            <p className='dreams_partner_p'>Flash</p> 
                        </div>
                        <div className='dreams_partner_stolbec'>
                            <p className='dreams_partner_p'>Bo sin</p>
                            <p className='dreams_partner_p'>Дмитрий Уткин</p>
                            <p className='dreams_partner_p'>Джон</p>
                        </div>
                        
                    </div>
                </section>
            </main>

        </div>
    );

};


export default Content;
