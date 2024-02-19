import React from "react";
import profile_banner from "../../../src/assets/img/profile-banner.webp";
import logo from "../../assets/img/logo.png";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const About = () => {
  return (
    <div className="">
      <div className="h-[240px]">
        <img
          src={profile_banner}
          className="w-full h-full bg-center bg-no-repeat bg-cover"
          alt=""
        />
      </div>
      <div className="container">
        <div className="w-[95%] md:w-[85%] mx-auto pt-[20px]">
          <div className="grid grid-cols-6 items-center mt-[-40px] md:mt-[-50px] mb-4">
            <div className="col-span-2 md:col-span-1">
              <div className="w-full">
                <div className="w-[160px] h-[160px] border shadow-xl flex justify-center items-center bg-white">
                  <div className="w-[130px] h-[130px] bg-black rounded-full flex justify-center items-center">
                    <img
                      src={logo}
                      className="w-[80px] h-[80px] -rotate-[15deg]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 md:col-span-5">
              <h1>About Us</h1>
            </div>
          </div>
          <div className="">
            <p className="mb-4 font-pyidaungsu">
              You can buy everything inside
            </p>
            <p className="mb-4 font-pyidaungsu ">
              The one and only Best E-commerce Website in Myanmar
              <MdOutlineKeyboardDoubleArrowRight className="inline-block" />
            </p>
            <p className="mb-4 font-pyidaungsu ">
              ကုမ္ပဏီ​၏ နောက်ခံသမိုင်းကြောင်းအကျဉ်း
              <MdOutlineKeyboardDoubleArrowRight className="inline-block" />
            </p>
            <p className="font-pyidaungsu text-p">
              Heaven Melody Entertainment သည် 2014 ခုနှစ်တွင်
              မြန်မာအသင်းကမ္ဘာ့ဖလားသို့ ၀င်ရောက်ခဲ့စဥ်က Football Theme Song
              "Victory" သီချင်းကို ဖန်တီးပုံဖော်ခဲ့ရာမှ အစပြုပြီး
              နောက်ပိုင်းတွင် Heaven Melody Co.Ltd ဟုခေါ်တွင်ခဲ့သည်။ Instruments
              များ Audio ပစ္စည်းများ ရောင်းချခြင်းနှင့်အတူ
              အစိုးရပုဂ္ဂလိကကျောင်းများ Activity Based Education System
              ပေါ်ထွန်းလာရေးအတွက်ပါ တစိုက်မတ်မတ်
              ဦးဆောင်လှုက်ရှားကြိုးပမ်းလျက်ရှိသည်။ အကောင်းမွန်ဆုံးပညာရေစနစ်
              တစ်ခုတွင် အရေးကြီးဆုံးဖြစ်သော "Art & Music Program, E-Learning
              System နှင့် E-Library" များပေါ်ထွန်းလာစေရန် လိုအပ်သော Facilities
              များ၊နည်းပညာအထောက်အပံ့များနှင့် ပညာရှင်များကို တစ်ပါတည်း One Stop
              Service ဆောင်ရွက်ပေးလျက်ရှိသည်။
            </p>
            <p className="font-pyidaungsu text-p">
              လာစေရန် လိုအပ်သော Facilities များ၊နည်းပညာအထောက်အပံ့များနှင့်
              ပညာရှင်များကို တစ်ပါတည်း One Stop Service ဆောင်ရွက်ပေးလျက်ရှိသည်။
              မြန်မာနိုင်ငံတွင် Edu Book Laptop များ ဆန်းသစ်ထုတ်လုပ်
              ဖြန့်ဖြူးရောင်းချကာ ပညာရေးစီးပွားရေး နယ်ပယ်များတွင်
              ကျယ်ကျယ်ပြန့်ပြန့် အသုံးပြုနိုင်အောင် ဆောင်ရွက်လျက်ရှိသည်။
              လူတိုင်း အနုပညာနှင့်ထိတွေ့ပြီး စိတ်နှလုံးနူးညံ့ပျော့ပြောင်းလာစေရန်
              ရည်ရွယ်ချက်ဖြင့် HM Musical Keyboard များနှင့် Electronic Piano
              များအား ဆန်းသစ်ထုတ်လုပ်ကာ "လူတိုင်း Musical Keyboard ကို
              ပိုင်ဆိုင်နိုင်ရမည်" ဟူသည့် ဆောင်ပုဒ်အတိုင်း
              ကြိုးစားဆောင်ရွက်လျက်ရှိပါသည် ။
            </p>
            <p className="font-pyidaungsu text-p  mb-4">
              ဘင်ခရာ စစ်တီး ဝိုင်း တူရိယာများ Acoustic
              တူရိယာများနိုင်ငံတကာတီးဝိုင်းသုံးတူရိယာများနှင့်
              မြန်မာ့တူရယာများကိုပါ တစ်နိုင်ငံလုံးသို့
              ပို့ဆောင်ရောင်းချလျက်ရှိပါသည်။
              <MdOutlineKeyboardDoubleArrowRight className="inline-block" />
            </p>

            <p className="font-pyidaungsu mb-2">
              ကုမ္ပဏီ​၏လုပ်ငန်းစဉ်မဟာဗျူဟာများ
              <MdOutlineKeyboardDoubleArrowRight className="inline-block" />
            </p>
            <ul className="mb-4">
              <li className="font-pyidaungsu text-p">
                -Activity Based Education System တစ်ခုပေါ်ထွန်းလာရေးအတွက်
                ကျောင်းတစ်ခုချင်းစီမှသည် <br /> မြို့နယ် အဆင့်၊
                နိုင်ငံတော်အဆင့်ဆထိ အဆင့်ဆင့်ဆောင်ရွက်သွားနိုင်စေရန်
                Computer/Internet
              </li>
              <li className="font-pyidaungsu text-p">
                -ပုဂ္ဂလိကကျောင်းများနှင့် ပုဂ္ဂလိက တက္ကသိုလ်များတွင် Computer /
                Internet ကိုအသုံးချရန် နည်းပညာ <br /> အစုံကို လွယ်ကူလျှင်မြန်စွာ
                E-Learning စနစ်ဖြင့် လေ့လာနိုင်စေရန်
              </li>
              <li className="font-pyidaungsu text-p">
                -လူသားတိုင်း Emotional Quotient (EQ) တိုးတက်လာစေရန် ရည်ရွယ်ပြီး
                ဂီတနှင့်နီးစပ်မှုရှိစေရန်တိုင်းနှင့် <br /> ပြည်နယ်အသီးသီးတွင်
                Franchise Center များထားရှိပြီး Musical Instrument များနှင့်
                နည်းပညာ <br /> အထောက်အကူပြု Laptop များရောင်းခပေးသွားရန်
              </li>
              <li className="font-pyidaungsu text-p">
                -ပြည်သူပြည်သားများအကျိုးကိုရှေးရှုပြီး
                နိုင်ငံတော်အစိုးရမှပေးအပ်သော တင်ဒါများနှင့် ပညာရေးဆိုင်ရာ <br />{" "}
                Project များတွင်အားကျိုးမာန်တက်ဆောင်ရွက်သွားရန်
              </li>
              <li className="font-pyidaungsu text-p">
                -E-Commerce System
                အားတည်ထောင်ထားရှိပြီးမြန်မာနိုင်ငံရဲ့စီးပွားရေးကို
                ကမ္ဘာ့အဆင့်မှီဖြစ်ပေါ် <br />
                စေရန် ပြောင်းလဲကြိုးစားဆောင်ရွက်သွားရန်
                <MdOutlineKeyboardDoubleArrowRight className="inline-block" />
              </li>
            </ul>

            <p className="font-pyidaungsu mb-2">
              ကုမဏီ၏ ဖောက်သည်အဖွဲ့အစည်းများ
              <MdOutlineKeyboardDoubleArrowRight className="inline-block" />
            </p>
            <ul className="mb-4">
              <li className="font-pyidaungsu text-p">
                - Private School များ၊ <br />
                Computer Training School များ၊
                <br />
                Bank နှင့်အခြား ကွန်ပြူတာအသုံးပြုလုပ်ငန်းများ၊
                <br />
                Music Training School များ ၊<br />
                Community Centre များ၊
                <br />
                အစိုးရ ကျောင်းများ၊
                <br />
                အစိုးရ တက္ကသိုလ်များ ၊<br />
                ပုဂ္ဂလိက တက္ကသိုလ်များ၊
                <br />
                Franchise Centre များ၊
                <br />
                စင်တင်တေးဂီတပါဝင်သော စားသောက်ဆိုင်များနှင့် Bar များ၊
                <br />
                ဘုန်းတော်ကြီးသင် ပညာရေးကျောင်းများနှင့် ပညာဒါနကျောင်းများ၊
                <br />
                အစိုးရ ရုံးဌာနများ
                <MdOutlineKeyboardDoubleArrowRight className="inline-block" />
              </li>
            </ul>
            <p className="font-pyidaungsu mb-2">
              ကုမ္ပဏီ​၏ဖောက်သည်များအတွက်အကျိုးကျေးဇူးမျာ
              <MdOutlineKeyboardDoubleArrowRight className="inline-block" />
            </p>
            <ul className="mb-4">
              <li className="font-pyidaungsu text-p">
                Win Win Situation ကိုအကျိုးမျှော်မှန်းပြီး ပြန်လည်ရောင်းချသော
                Customer များအတွက်လည်း သင့် <br />
                တင့်မျှတသော အကျိုးအမြတ်များဖန်တီးပေးခြင်း
                <br />
                ၊ဖြန့်ဖြူးရောင်းချလျက်ရှိသည့် ကုန်ပစ္စည်းတိုင်းအတွက် Service
                Warranty 1year အပြည့်ထားရှိပြီး အကောင်းမွန်ဆုံး
                ဆောင်ရွက်ပေးခြင်း
                <br />
                ၊Personal Use အတွက် ဝယ်ယူသော တစ်ဦးချင်း Customer
                များကိုလည်းဆိုင်တွင်လာရောက်ဝယ်ယူ
                <br />
                စရာမလိုဘဲ အိမ်တိုင်ရာရောက် Drop Shipping
                ပို့ဆောင်ရောင်းချပေးခြင်း
                <br />
                ၊E-Commerce Platform ပေါ်တွင် ရောင်းဝယ်ဖောက်ကားမည့်
                ရောင်းချသူများနှင့် ဝယ်သူများအတွက်လည်း အဆင်ပြေမှုရှိစေရန်
                One-Stop Serviceများ
                <br />
                ဖန်တီးပေးခြင်း
                <br />
                ၊ နိုင်ငံတကာမှ ဝယ်ယူသည့် Foreign Customer များအတွက်လည်း
                စိတ်ချသေချာစွာ အမှားအယွင်းမရှိ One Stop Service
                ဖြင့်ပို့ဆောင်ရောင်းချပေးလျက်ရှိပါသည်
                <MdOutlineKeyboardDoubleArrowRight className="inline-block" />
              </li>
            </ul>
            <p className="mb-2 font-pyidaungsu">
              HEAVEN MELODY Co.Ltd Co.LTD
              <MdOutlineKeyboardDoubleArrowRight className="inline-block" />
            </p>
            <ul className="mb-10">
              <li className="mb-1 text-p font-pyidaungsu">
                U Chit Mg Mg MD/CEO,
              </li>
              <li className="mb-1 text-p font-pyidaungsu">
                U Lin Naing Htun General Manager,
              </li>
              <li className="mb-1 text-p font-pyidaungsu">
                Admin Department :
              </li>
              <li className="mb-1 text-p font-pyidaungsu">
                Ma Thinn Thinn Hlaing (Admin/Supply Change)
              </li>
              <li className="mb-1 text-p font-pyidaungsu">
                Account Department :
              </li>
              <li className="mb-1 text-p font-pyidaungsu">
                Ma Su Su Maw (Account/Sale Helper)
              </li>
              <li className="mb-1 text-p font-pyidaungsu">
                Operation Department :
              </li>
              <li className="mb-1 text-p font-pyidaungsu">
                Ko Naing Win Htut (Electronic Technicial),
              </li>
              <li className="mb-1 text-p font-pyidaungsu">
                Ko Han Lin Htun (Customer Service Staff)
              </li>
              <li className="mb-1 text-p font-pyidaungsu">
                Marketing Department:
              </li>
              <li className="mb-1 text-p font-pyidaungsu">
                Off Line Sale & Marketing:
              </li>
              <li className="mb-1 text-p font-pyidaungsu">
                Ma Khin Thandar Aye (Off Line Sale & Marketing Manager),
              </li>
              <li className="mb-1 text-p font-pyidaungsu">
                Ma Pyae Wai Shan (Off Line Sale & Marketing Staff) ,
              </li>
              <li className="mb-1 text-p font-pyidaungsu">
                Ma Nann Htet Htet San (Marketing Staff)
              </li>
              <li className="mb-1 text-p font-pyidaungsu">
                On Line Digital Sale & Marketing:
              </li>
              <li className="mb-1 text-p font-pyidaungsu">
                Ko Wanna (On Line Digital Sale & Marketing Executive)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
