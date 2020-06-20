var app = angular.module('myApp', ['ngStorage']);
app.controller('appCtrl', function($scope,$http,$timeout,$localStorage) {

	
	$scope.init=function(){
		$scope.login=true;
		$scope.loggedin=false;
		$scope.record=false;
		$scope.result=false; 

		$scope.loader=false;
		$scope.recording=false;
		$scope.init_record=false;
		
		$scope.spinner=false;
	}

	$scope.init();

	$scope.login=function(){

		$scope.invalid_login=false;

		if($scope.username=='admin' && $scope.password=='admin'){

			
			$scope.spinner=true;
			$scope.ttscall("Hi welcome to voice enabled e shopping application, Kindly tap and hold mic icon for your search...");
			$scope.login=false;
			$scope.loggedin=true;
			$scope.record=true;
			$scope.init_record=true;
			$timeout(function(){
				$scope.spinner=false;
			},8000)

		}else{
			$scope.invalid_login=true;
		}
	}

	$scope.callRecord=function(){
		$scope.init_record=false;
		$scope.recording=false;
		$scope.loader=true;
	}

	$scope.setRecord=function(){
		$scope.init_record=false;
		$scope.recording=true;
	}
	
	$scope.getResult=function(){
		$scope.record=false;
		$scope.result=true; 

		$timeout(function() {
			jQuery('#myModal').modal('show');
		},2000);

	}

	$scope.goShopping=function(){
		$scope.keyword=$('#keyword').val();
		if($scope.keyword!=undefined && $scope.keyword!=""){

			$scope.search($scope.keyword.trim());

			$scope.result=true;


			///Market call
		}
	}


	$scope.logout=function(){
		location.reload(true);

	}
	
	$scope.ttscall=function(text){
		$http({
			url : "https://api.sentient.io/tts/prod/ttseng",
			method : 'POST',
			contentType : 'application/json',
			headers:{'x-api-key':"0614A13555F140B4B23D"},
			data : { "text": text, "language": "1"}
			}).then(function(response) {
				console.log(response);
				var audioString = "data:audio/mp3;base64," + response.data.audioContent;


				var snd = new Audio("data:audio/mp3;base64," + response.data.audioContent);
				snd.play();
				
			})
	}


	var data={
		"1": {
			"title": "Realme 6 (Comet Blue, 128 GB)  (6 GB RAM)",
			"category": "mobile",
			"price":"10000",
			"desc": "90 Hz Ultra Smooth Display Enjoy a smooth and immersive visual experience, thanks to the large 90Hz ultra-smooth display on the realme 6.",
			"url":"https://www.flipkart.com/realme-6-comet-blue-128-gb/p/itm64975b00cb8e6?pid=MOBFPCX7UQU3CHKG&lid=LSTMOBFPCX7UQU3CHKG2J1SAU&marketplace=FLIPKART&srno=s_1_1&otracker=AS_Query_OrganicAutoSuggest_2_6_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_2_6_na_na_na&fm=SEARCH&iid=b4346801-90fd-40cd-a82e-c1309a9942db.MOBFPCX7UQU3CHKG.SEARCH&ppt=sp&ppn=sp&ssid=g1ro1xpsa80000001592655125023&qH=37695f7554f510f0"
		}, 
		"2": {
			"title": "Redmi 8 (Onyx Black, 64 GB)  (4 GB RAM)",
			"category": "mobile",
			"price":"9,499",
			"desc": "If you are a travel blogger, gamer, entertainment seeker, or a person who loves a high-end personal device, then the Redmi 8 has been created to meet your needs. This smartphone features a 15.8-cm (6.22) Dot Notch Display, a 12 MP + 2 MP AI Dual Camera, and a 5000 mAh High-capacity Battery to offer detailed views of the stunning photos that you can click all day long without running out of battery life.",
			"url":"https://www.flipkart.com/redmi-8-onyx-black-64-gb/p/itmebd23d8a2ed1b?pid=MOBFKPYDZJQHGJXA&lid=LSTMOBFKPYDZJQHGJXA5X8Q5G&marketplace=FLIPKART&srno=s_1_2&otracker=AS_Query_OrganicAutoSuggest_2_6_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_2_6_na_na_na&fm=SEARCH&iid=b4346801-90fd-40cd-a82e-c1309a9942db.MOBFKPYDZJQHGJXA.SEARCH&ppt=sp&ppn=sp&ssid=g1ro1xpsa80000001592655125023&qH=37695f7554f510f0"
		}, 
		"3": {
			"title": "Redmi 8 (Sapphire Blue, 64 GB)  (4 GB RAM)",
			"category": "mobile",
			"price":"9,499",
			"desc": "If you are a travel blogger, gamer, entertainment seeker, or a person who loves a high-end personal device, then the Redmi 8 has been created to meet your needs. This smartphone features a 15.8-cm (6.22) Dot Notch Display, a 12 MP + 2 MP AI Dual Camera, and a 5000 mAh High-capacity Battery to offer detailed views of the stunning photos that you can click all day long without running out of battery life.",
			"url":"https://www.flipkart.com/redmi-8-sapphire-blue-64-gb/p/itmd1c68a1a86f5e?pid=MOBFKPYDENDXZZ7U&lid=LSTMOBFKPYDENDXZZ7U9TT5NP&marketplace=FLIPKART&srno=s_1_3&otracker=AS_Query_OrganicAutoSuggest_2_6_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_2_6_na_na_na&fm=SEARCH&iid=b4346801-90fd-40cd-a82e-c1309a9942db.MOBFKPYDENDXZZ7U.SEARCH&ppt=sp&ppn=sp&ssid=g1ro1xpsa80000001592655125023&qH=37695f7554f510f0"
		}, 
		"4": {
			"title": "Realme C3 (Frozen Blue, 64 GB)  (4 GB RAM)",
			"category": "mobile",
			"price":"8,999",
			"desc": "Packed with an octa-core Helio G70 AI processor, this Realme smartphone’s performance certainly packs a punch. Be it gaming or multitasking, you can do it all without any hint of lag by using this smartphone. It also comes equipped with a 16.5-centimetre (6.5) HD+ mini-drop fullscreen that has a screen-to-body ratio of about 89.8% to help you see every single detail in your favourite video content.",
			"url":"https://www.flipkart.com/realme-c3-frozen-blue-64-gb/p/itm58bf81a807d66?pid=MOBFZHC5QRBG2BSR&lid=LSTMOBFZHC5QRBG2BSRYU9DNF&marketplace=FLIPKART&srno=s_1_4&otracker=AS_Query_OrganicAutoSuggest_2_6_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_2_6_na_na_na&fm=SEARCH&iid=b4346801-90fd-40cd-a82e-c1309a9942db.MOBFZHC5QRBG2BSR.SEARCH&ppt=sp&ppn=sp&ssid=g1ro1xpsa80000001592655125023&qH=37695f7554f510f0"
		}, 
		"5": {
			"title": "Realme 5i (Forest Green, 64 GB)  (4 GB RAM)",
			"category": "mobile",
			"price":"10,999",
			"desc": "The Realme 5i is here to meet your smartphone demands seamlessly as it houses a massive 5000 mAh battery and is powered by a 2.0 GHz Qualcomm Snapdragon 665 AIE Processor. Make photography a serious business with its AI Quad camera that features a 12 MP Primary Lens, 8 MP Ultra Wide-Angle Lens, 2 MP Super Macro Lens and 2 MP Portrait Lens.",
			"url":"https://www.flipkart.com/realme-5i-forest-green-64-gb/p/itmdac0da867a9fa?pid=MOBFNG3GNW3BU2XE&lid=LSTMOBFNG3GNW3BU2XERAL9TG&marketplace=FLIPKART&srno=s_1_7&otracker=AS_Query_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_1_6_na_na_na&fm=SEARCH&iid=108b1d6e-aba7-4676-8221-62bd485bbe52.MOBFNG3GNW3BU2XE.SEARCH&ppt=sp&ppn=sp&ssid=bhjunenkdc0000001592656003320&qH=37695f7554f510f0"
		},  
		"6": {
			"title": "Realme 5i (Aqua Blue, 128 GB)  (4 GB RAM)",
			"category": "mobile",
			"price":"11,999",
			"desc": "",
			"url":"https://www.flipkart.com/realme-5i-aqua-blue-128-gb/p/itmdac0da867a9fa?pid=MOBFP6W584RNB3HH&lid=LSTMOBFP6W584RNB3HHZNLRJ5&marketplace=FLIPKART&srno=s_1_8&otracker=AS_Query_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_1_6_na_na_na&fm=SEARCH&iid=108b1d6e-aba7-4676-8221-62bd485bbe52.MOBFP6W584RNB3HH.SEARCH&ppt=sp&ppn=sp&ssid=bhjunenkdc0000001592656003320&qH=37695f7554f510f0"
		},  
		"7": {
			"title": "Redmi Note 8 Pro (Halo White, 128 GB)  (6 GB RAM)",
			"category": "mobile",
			"price":"16,999",
			"desc": "If you are looking for a smartphone that can give you an enhanced listening, viewing, and good user experience, then you can go for the Redmi Note 8 Pro. It comes with the 64 MP AI Quad Camera Array, which lets you click gorgeous professional-quality photos anytime, anywhere. As for selfies, you can use the 20 MP selfie camera and capture your moments to relive them later. It also comes with up to 128 GB of ROM and 6 GB of RAM. Also, it has a powerful battery, so you can use the phone for hours on end. ",
			"url":"https://www.flipkart.com/redmi-note-8-pro-halo-white-128-gb/p/itmc585e6c8ffd12?pid=MOBFHGT9NWZHHSHF&lid=LSTMOBFHGT9NWZHHSHFKV1PHL&marketplace=FLIPKART&srno=s_1_11&otracker=AS_Query_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_1_6_na_na_na&fm=SEARCH&iid=108b1d6e-aba7-4676-8221-62bd485bbe52.MOBFHGT9NWZHHSHF.SEARCH&ppt=sp&ppn=sp&ssid=bhjunenkdc0000001592656003320&qH=37695f7554f510f0"
		},  
		"8": {
			"title": "I Kall K24 New  (Gold)",
			"category": "mobile",
			"price":"649",
			"desc": "NA",
			"url":"https://www.flipkart.com/kall-k24-new/p/itmf896rgpvgfejg?pid=MOBF894GN9MEXH5Z&lid=LSTMOBF894GN9MEXH5ZE1XEVN&marketplace=FLIPKART&srno=s_1_14&otracker=AS_Query_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_1_6_na_na_na&fm=SEARCH&iid=en_IFrY8WAXCYgzfzj51z%2Blr%2FCy1kaqVIdf4va9UVNtojtMx%2FVDVKmOBdg9Wr%2FniTTtuVr8OfBAQ39%2BTqkFkC7LJQ%3D%3D&ppt=sp&ppn=sp&ssid=bhjunenkdc0000001592656003320&qH=37695f7554f510f0"
		},  
		"9": {
			"title": "Realme 5 Pro (Crystal Green, 64 GB)  (6 GB RAM)",
			"category": "mobile",
			"price":"14,999",
			"desc": "Right from texting your buddies to clicking incredible pictures - the Realme 5 Pro lets you do more of what you love. Powered by a 10 nm octa-core Qualcomm Snapdragon 712 AIE processor, this phone lets you multitask seamlessly. Thanks to the 48 MP AI Quad Camera, you can capture beautiful scenic views on film. Watch everything on its 16 cm (6.3) FHD+ Mini-drop display come to life.",
			"url":"https://www.flipkart.com/realme-5-pro-crystal-green-64-gb/p/itmfj9twdugyvg77?pid=MOBFJ9TWMUX7H8WN&lid=LSTMOBFJ9TWMUX7H8WNDRW1VL&marketplace=FLIPKART&srno=s_1_16&otracker=AS_Query_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_1_6_na_na_na&fm=SEARCH&iid=108b1d6e-aba7-4676-8221-62bd485bbe52.MOBFJ9TWMUX7H8WN.SEARCH&ppt=sp&ppn=sp&ssid=bhjunenkdc0000001592656003320&qH=37695f7554f510f0"
		},  
		"10": {
			"title": "Realme Narzo 10 (That Green, 128 GB)  (4 GB RAM)",
			"category": "mobile",
			"price":"11,999",
			"desc": "Powerful Processor.Featuring the octa-core Helio G80 processor, the CPU performance of the realme Narzo 10 is improved by about 35% and its GPU performance is improved by about 25% over the previous generation, resulting in a seamless multitasking and gaming experience.",
			"url":"https://www.flipkart.com/realme-narzo-10-that-green-128-gb/p/itmfaa990ac54b7a?pid=MOBFQ36AGTW8HNMW&lid=LSTMOBFQ36AGTW8HNMWFLXHAY&marketplace=FLIPKART&srno=s_1_19&otracker=AS_Query_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_1_6_na_na_na&fm=SEARCH&iid=108b1d6e-aba7-4676-8221-62bd485bbe52.MOBFQ36AGTW8HNMW.SEARCH&ppt=sp&ppn=sp&ssid=bhjunenkdc0000001592656003320&qH=37695f7554f510f0"
		}, 
		"11": {
			 "title": "Philips BT3101/15 Runtime: 45 min Trimmer for Men  (Black, White)",
			"category": "electronics",
			"price":"1,349",
			"desc": "",
			"url":"https://www.flipkart.com/philips-bt3101-15-runtime-45-min-trimmer-men/p/itm67af0f542016d?pid=TMRFSEJ5WSW82ZDN&lid=LSTTMRFSEJ5WSW82ZDNL70AAU&marketplace=FLIPKART&srno=s_1_1&otracker=search&otracker1=search&fm=SEARCH&iid=0712b8cf-996f-4304-8bd3-fb1125e40cac.TMRFSEJ5WSW82ZDN.SEARCH&ppt=sp&ppn=sp&ssid=yki9nsu8000000001592656388463&qH=9ca91fd2ee5f4b46"
			}, 
		"12": {
			"title": "Mi Box 4k Media Streaming Device  (Black)",
			"category": "electronics",
			"price":"3,499",
			"desc": "Bring home the Mi Box 4K Media Streaming Device, and get endlessly entertained while chilling at home. This streaming device runs on Android TV 9.0 and has a fast and user-friendly interface, built-in Chromecast, and Google Assistant to effortlessly stream shows, movies, videos, music, and much more on your smart TV.",
			"url":"https://www.flipkart.com/mi-box-4k-media-streaming-device/p/itma11fd77092000?pid=SELFQ6GTFUX9HEF5&lid=LSTSELFQ6GTFUX9HEF5E8JFTR&marketplace=FLIPKART&srno=s_1_2&otracker=search&otracker1=search&fm=SEARCH&iid=0712b8cf-996f-4304-8bd3-fb1125e40cac.SELFQ6GTFUX9HEF5.SEARCH&ppt=sp&ppn=sp&ssid=yki9nsu8000000001592656388463&qH=9ca91fd2ee5f4b46"
		}, 
		"13": {
			"title": "Butterfly Rapid Electric Kettle (1.5 L, Black) & Eco750 ml water bottle",
			"category": "electronics",
			"price":"765",
			"desc": "Prepare hot water, instant tea etc in a matter of minutes with Butterfly EKN 1.5 Kettle. With attractive features like automatic cut-off, ergonomically designed handles, unique designs with attractive finishes, lightweight and compact, making it easy to carry. To top it off, it also comes with the best in class safety features & stainless Steel water bottle , making it safe to use.",
			"url":"https://www.flipkart.com/butterfly-rapid-electric-kettle-1-5-l-black-eco750-ml-water-bottle/p/itmf1f9386bb6a97?pid=EKTFJP94HGT3MGTD&lid=LSTEKTFJP94HGT3MGTDN4XD2L&marketplace=FLIPKART&srno=s_1_3&otracker=search&otracker1=search&fm=SEARCH&iid=0712b8cf-996f-4304-8bd3-fb1125e40cac.EKTFJP94HGT3MGTD.SEARCH&ppt=sp&ppn=sp&ssid=yki9nsu8000000001592656388463&qH=9ca91fd2ee5f4b46"
		}, 
		"14": {
			"title": "Nova Prime Series NHT 1085 Runtime: 45 min Trimmer for Men  (Black)",
			"category": "electronics",
			"price":"1,049",
			"desc": "Facial hair is a prominent feature of a man's face and it needs to be groomed regularly if you want to maintain a suave image. Helping you do this is this Nova trimmer. It comes with 20 lock-in settings which let you trim and style your facial hair. Its compact size means you can carry it along with you in your toiletry bag when you travel.",
			"url":"https://www.flipkart.com/nova-prime-series-nht-1085-runtime-45-min-trimmer-men/p/itm263730f8e58f9?pid=SHVENAZ5AQNMDGYA&lid=LSTSHVENAZ5AQNMDGYAKNSAM4&marketplace=FLIPKART&srno=s_1_4&otracker=search&otracker1=search&fm=SEARCH&iid=0712b8cf-996f-4304-8bd3-fb1125e40cac.SHVENAZ5AQNMDGYA.SEARCH&ppt=sp&ppn=sp&ssid=yki9nsu8000000001592656388463&qH=9ca91fd2ee5f4b46"
		}, 
		"15": {
			"title": "Beardo Blaze Runtime: 90 min trimmer for men  (Black)",
			"category": "electronics",
			"price":"1,399",
			"desc": "",
			"url":"https://www.flipkart.com/beardo-blaze-runtime-90-min-trimmer-men/p/itm5f48af1d3492f?pid=TMRFKHDP442UTSWK&lid=LSTTMRFKHDP442UTSWKPBI6ET&marketplace=FLIPKART&srno=s_1_5&otracker=search&otracker1=search&fm=SEARCH&iid=0712b8cf-996f-4304-8bd3-fb1125e40cac.TMRFKHDP442UTSWK.SEARCH&ppt=sp&ppn=sp&ssid=yki9nsu8000000001592656388463&qH=9ca91fd2ee5f4b46"
		},  
		"16": {
			"title": "Flipkart SmartBuy UltraCut Runtime: 45 min Trimmer for men  (Black, Silver)",
			"category": "electronics",
			"price":"999",
			"desc": "1 Trimmer, 1 Manual user, 1 Cable, 1 Comb oil, 1 Smartbuy standard gift box",
			"url":"https://www.flipkart.com/flipkart-smartbuy-ultracut-runtime-45-min-trimmer-men/p/itm5c2f9a9736835?pid=TMRFGXV226MQ9ZHA&lid=LSTTMRFGXV226MQ9ZHAPLUG05&marketplace=FLIPKART&srno=s_1_6&otracker=search&otracker1=search&fm=SEARCH&iid=0712b8cf-996f-4304-8bd3-fb1125e40cac.TMRFGXV226MQ9ZHA.SEARCH&ppt=sp&ppn=sp&ssid=yki9nsu8000000001592656388463&qH=9ca91fd2ee5f4b46"
		},  
		"17": {
			"title": "Bajaj GX1 500 W Mixer Grinder",
			"category": "electronics",
			"price":"1,949",
			"desc": "Whether you want to grind spices for a special recipe or make dosa batter at home, this Bajaj mixer grinder has got you covered. With the stainless steel jars and their easy-grip handles, this grinder ensures a hassle-free grinding experience. This grinder comes with an automatic shut-off feature that keeps it safe from any electrical damage.",
			"url":"https://www.flipkart.com/bajaj-gx1-500-w-mixer-grinder/p/itm6769490d1860d?pid=MIXDA3UAUUWACGHH&lid=LSTMIXDA3UAUUWACGHH7IWO0U&marketplace=FLIPKART&srno=s_1_8&otracker=search&otracker1=search&fm=SEARCH&iid=0712b8cf-996f-4304-8bd3-fb1125e40cac.MIXDA3UAUUWACGHH.SEARCH&ppt=sp&ppn=sp&ssid=yki9nsu8000000001592656388463&qH=9ca91fd2ee5f4b46"
		},  
		"18": {
			"title": "Kent Ace Plus 8 L RO + UV + UF + TDS Water Purifier  (White)",
			"category": "electronics",
			"price":"13,799",
			"desc": "Keep water-borne diseases away from your home by installing the Kent Ace Plus Water Purifier. This kitchen appliance features a Double Purification system, Kent’s Mineral RO Technology, and a High-storage Capacity to ensure that you do not run out of pure water in your home.",
			"url":"https://www.flipkart.com/kent-ace-plus-8-l-ro-uv-uf-tds-water-purifier/p/itmffwqxzmpdfxue?pid=WAPFFWQX6T9HEYG7&lid=LSTWAPFFWQX6T9HEYG7INOG4W&marketplace=FLIPKART&srno=s_1_18&otracker=search&otracker1=search&fm=SEARCH&iid=0712b8cf-996f-4304-8bd3-fb1125e40cac.WAPFFWQX6T9HEYG7.SEARCH&ppt=sp&ppn=sp&ssid=yki9nsu8000000001592656388463&qH=9ca91fd2ee5f4b46"
		},  
		"19": {
			"title": "Nikon D5600 DSLR Camera Body with Dual Lens: AF-P DX Nikkor 18 - 55 MM F/3.5-5.6G VR and 70-300 MM F/4.5-6.3G ED VR (16 GB SD Card)  (Black)",
			"category": "electronics",
			"price":"49,990",
			"desc": "DK-25 Rubber Eyecup, BF-1B Body Cap, EN-EL14a Rechargeable Li-ion Battery (with Terminal Cover), AN-DC3 Strap, MH-24 Battery Charger (Plug Adapter Supplied in Countries or Regions where Required, Shape Depends on Country of Sale)",
			"url":"https://www.flipkart.com/nikon-d5600-dslr-camera-body-dual-lens-af-p-dx-nikkor-18-55-mm-f-3-5-5-6g-vr-70-300-f-4-5-6-3g-ed-16-gb-sd-card/p/itmezvbdg2azkujh?pid=DLLEZVB8MDXDYTHG&lid=LSTDLLEZVB8MDXDYTHGP8CUFI&marketplace=FLIPKART&srno=s_1_28&otracker=search&otracker1=search&fm=SEARCH&iid=0712b8cf-996f-4304-8bd3-fb1125e40cac.DLLEZVB8MDXDYTHG.SEARCH&ppt=sp&ppn=sp&ssid=yki9nsu8000000001592656388463&qH=9ca91fd2ee5f4b46"
		},  
		"20": {
			"title": "Nova Plus 1100 w Amaze NI 10 1100 W Dry Iron  (Grey & Turquoise)",
			"category": "electronics",
			"price":"479",
			"desc": "Look stunning and exude confidence in crisp, creaseless clothes with the Nova Plus 1100 W Amaze NI 10 Dry Iron. This home appliance features a Non-stick Triple-coated Soleplate, Quick Heat Technology, and a 360-degree swivel cord for easy and quick ironing of different fabrics and garments.",
			"url":"https://www.flipkart.com/nova-plus-1100-w-amaze-ni-10-dry-iron/p/itmf3qzxbpdgygjm?pid=IRNF3QXRABEGM8WC&lid=LSTIRNF3QXRABEGM8WCLCLCY7&marketplace=FLIPKART&spotlightTagId=BestvalueId_search.flipkart.com&srno=s_1_23&otracker=search&otracker1=search&fm=SEARCH&iid=0712b8cf-996f-4304-8bd3-fb1125e40cac.IRNF3QXRABEGM8WC.SEARCH&ppt=sp&ppn=sp&ssid=yki9nsu8000000001592656388463&qH=9ca91fd2ee5f4b46"
		},
		"21": {
			"title": "Univocean Decorative Wallpaper  (200 cm X 45 cm)",
			"category": "home applies",
			"price":"260",
			"desc": "Univocean come with the new designed wallpapers. Ideal for family lounge, bedrooms, living room, show room, door, window, hall, kitchen, bathroom, kids room, play room, nursery, shop, restaurant etc. PVC, non-toxic and waterproof. These wall stickers decorate your home just in minutes. Easy installation the surface you wish to attach your decal must be clean and from dust, grease or any other contamination. Simply peel those pre-cut pieces of wall stickers off from the backing paper and apply them to the desired area. Rease or any other contamination. Simply peel those pre-cut pieces of wall stickers off from the backing paper and apply them to the desired area. Refer to the finished design shown in between the sheet and follow the numbers mentioned on the pieces to form the desired pattern. Freshly painted or lacquered surfaces must be allowed to completely cure for the minimum of 30 days before the decal is applied. After pasting the wall stickers on your wall, press firmly along the border and remove air bubbles if any, repeat and if required.",
			"url":"https://www.flipkart.com/univocean-decorative-wallpaper/p/itme59a23d13209e?pid=WLPFKKH6NY82V227&lid=LSTWLPFKKH6NY82V227ILJ4F4&marketplace=FLIPKART&srno=s_1_29&otracker=search&otracker1=search&fm=SEARCH&iid=6a60a532-858e-4c57-93e4-6aa2fcf4cf7d.WLPFKKH6NY82V227.SEARCH&ppt=sp&ppn=sp&ssid=d63a5tqrao0000001592657200417&qH=6e03a440d0933138"
		}, 
		"22": {
			"title": "Decor Villa Small Vinyl Sticker  (Pack of 1)",
			"category": "home applies",
			"price":"215",
			"desc": "Welcome To The Foremost Place On The Web To Find Artistic Designs Of Wall Decals And Wall Stickers.Wall Decals And Wall Stickers Are Self-Adhesive Vinyl Stickers Made For Applying To A Surface.They Are A Great Alternative To Wallpaper, Paint Or Stencils And They Give You Choice. Choose Your Space, Plan The Design You`D Like To Make, And Then Apply. They Are Extremely Durable And Are Available In Various Designs. Its Extremely Easy To Apply Them On Your Walls Or Any Flat,Smooth Surface. Disclaimer : All Pictures Are Digitally Enlarged To Provide, Better View Of The Product , Hence Picture Stands , No Reference For Product Size , Refer To The Name Of The Product For Selection Of Size Of The Product . You'll Receive Exact Size Products As Per Your Order. Background And Other Props Are Only For Depiction, They Will Not Be Included.",
			"url":"https://www.flipkart.com/decor-villa-small-vinyl-sticker/p/itmeqyprqd4yxj84?pid=STIEQYPRYZYHF8ZR&lid=LSTSTIEQYPRYZYHF8ZRU16HGW&marketplace=FLIPKART&srno=s_2_45&otracker=search&otracker1=search&fm=SEARCH&iid=322ba2db-d18d-4704-96af-d99303c679d5.STIEQYPRYZYHF8ZR.SEARCH&ppt=sp&ppn=sp&ssid=d63a5tqrao0000001592657200417&qH=6e03a440d0933138"
		}, 
		"23": {
			"title": "Cortina Large Wall Decals Sticker  (Pack of 1)",
			"category": "home applies",
			"price":"369",
			"desc": "Cortina wall stickers decorate your home just in minutes. Wall Sticker Application Instruction Our wall decal application instructions will make it easy for you to apply your wall decals. 1). The surface you wish to attach your decal must be clean and free from dust, grease or any other contamination. 2). Simply peel those pre-cut pieces of wall stickers off from backing paper and apply them on the desired area",
			"url":"https://www.flipkart.com/cortina-large-wall-decals-sticker/p/itmecd7facpbrear?pid=STIECD7FDFCRPVXA&lid=LSTSTIECD7FDFCRPVXAYPY2TQ&marketplace=FLIPKART&srno=s_2_48&otracker=search&otracker1=search&fm=SEARCH&iid=322ba2db-d18d-4704-96af-d99303c679d5.STIECD7FDFCRPVXA.SEARCH&ppt=sp&ppn=sp&ssid=d63a5tqrao0000001592657200417&qH=6e03a440d0933138"
		}, 
		"24": {
			"title": "Decor Villa Large Vinyl Sticker  (Pack of 1)",
			"category": "home applies",
			"price":"206",
			"desc": "Welcome To The Foremost Place On The Web To Find Artistic Designs Of Wall Decals And Wall Stickers.Wall Decals And Wall Stickers Are Self-Adhesive Vinyl Stickers Made For Applying To A Surface.They Are A Great Alternative To Wallpaper, Paint Or Stencils And They Give You Choice. Choose Your Space, Plan The Design You`D Like To Make, And Then Apply. They Are Extremely Durable And Are Available In Various Designs. Its Extremely Easy To Apply Them On Your Walls Or Any Flat,Smooth Surface. Disclaimer : All Pictures Are Digitally Enlarged To Provide, Better View Of The Product , Hence Picture Stands , No Reference For Product Size , Refer To The Name Of The Product For Selection Of Size Of The Product . You'll Receive Exact Size Products As Per Your Order. Background And Other Props Are Only For Depiction, They Will Not Be Included.",
			"url":"https://www.flipkart.com/decor-villa-large-vinyl-sticker/p/itmeqwmwpgadzjzh?pid=STIEQWMWEZSZDJFZ&lid=LSTSTIEQWMWEZSZDJFZ6O7H8P&marketplace=FLIPKART&srno=s_2_55&otracker=search&otracker1=search&fm=SEARCH&iid=322ba2db-d18d-4704-96af-d99303c679d5.STIEQWMWEZSZDJFZ.SEARCH&ppt=sp&ppn=sp&ssid=d63a5tqrao0000001592657200417&qH=6e03a440d0933138"
		}, 
		"25": {
			"title": "Decor Villa Large Vinyl Sticker  (Pack of 1)",
			"category": "home applies",
			"price":"206",
			"desc": "Welcome To The Foremost Place On The Web To Find Artistic Designs Of Wall Decals And Wall Stickers.Wall Decals And Wall Stickers Are Self-Adhesive Vinyl Stickers Made For Applying To A Surface.They Are A Great Alternative To Wallpaper, Paint Or Stencils And They Give You Choice. Choose Your Space, Plan The Design You`D Like To Make, And Then Apply. They Are Extremely Durable And Are Available In Various Designs. Its Extremely Easy To Apply Them On Your Walls Or Any Flat,Smooth Surface. Disclaimer : All Pictures Are Digitally Enlarged To Provide, Better View Of The Product , Hence Picture Stands , No Reference For Product Size , Refer To The Name Of The Product For Selection Of Size Of The Product . You'll Receive Exact Size Products As Per Your Order. Background And Other Props Are Only For Depiction, They Will Not Be Included.",
			"url":"https://www.flipkart.com/decor-villa-large-vinyl-sticker/p/itmeqwmw6refyref?pid=STIEQWMWRTXH4SQN&lid=LSTSTIEQWMWRTXH4SQNU1BH21&marketplace=FLIPKART&srno=s_3_94&otracker=search&otracker1=search&fm=SEARCH&iid=bf29cb92-053d-4f0c-a79f-a7dab66af815.STIEQWMWRTXH4SQN.SEARCH&ppt=sp&ppn=sp&ssid=d63a5tqrao0000001592657200417&qH=6e03a440d0933138"
		},  
		"26": {
			"title": "Decor Villa Medium Vinyl Sticker  (Pack of 1)",
			"category": "home applies",
			"price":"206",
			"desc": "Welcome To The Foremost Place On The Web To Find Artistic Designs Of Wall Decals And Wall Stickers.Wall Decals And Wall Stickers Are Self-Adhesive Vinyl Stickers Made For Applying To A Surface.They Are A Great Alternative To Wallpaper, Paint Or Stencils And They Give You Choice. Choose Your Space, Plan The Design You`D Like To Make, And Then Apply. They Are Extremely Durable And Are Available In Various Designs. Its Extremely Easy To Apply Them On Your Walls Or Any Flat,Smooth Surface. Disclaimer : All Pictures Are Digitally Enlarged To Provide, Better View Of The Product , Hence Picture Stands , No Reference For Product Size , Refer To The Name Of The Product For Selection Of Size Of The Product . You'll Receive Exact Size Products As Per Your Order. Background And Other Props Are Only For Depiction, They Will Not Be Included.",
			"url":"https://www.flipkart.com/decor-villa-medium-vinyl-sticker/p/itmepzhzuxegrkgd?pid=STIEPZHZ53QTEMJH&lid=LSTSTIEPZHZ53QTEMJHDPVHBN&marketplace=FLIPKART&srno=s_4_132&otracker=search&otracker1=search&fm=SEARCH&iid=f8aa72b2-b90d-46db-b234-11750a915827.STIEPZHZ53QTEMJH.SEARCH&ppt=sp&ppn=sp&ssid=d63a5tqrao0000001592657200417&qH=6e03a440d0933138"
		},  
		"27": {
			"title": "Decor Villa Large Vinyl Sticker  (Pack of 1)",
			"category": "home applies",
			"price":"210",
			"desc": "Welcome To The Foremost Place On The Web To Find Artistic Designs Of Wall Decals And Wall Stickers.Wall Decals And Wall Stickers Are Self-Adhesive Vinyl Stickers Made For Applying To A Surface.They Are A Great Alternative To Wallpaper, Paint Or Stencils And They Give You Choice. Choose Your Space, Plan The Design You`D Like To Make, And Then Apply. They Are Extremely Durable And Are Available In Various Designs. Its Extremely Easy To Apply Them On Your Walls Or Any Flat,Smooth Surface. Disclaimer : All Pictures Are Digitally Enlarged To Provide, Better View Of The Product , Hence Picture Stands , No Reference For Product Size , Refer To The Name Of The Product For Selection Of Size Of The Product . You'll Receive Exact Size Products As Per Your Order. Background And Other Props Are Only For Depiction, They Will Not Be Included.",
			"url":"https://www.flipkart.com/decor-villa-large-vinyl-sticker/p/itmephzsjnmanyhy?pid=STIEPHZSYGBAMSJA&lid=LSTSTIEPHZSYGBAMSJAIQN0T5&marketplace=FLIPKART&srno=s_4_144&otracker=search&otracker1=search&fm=SEARCH&iid=f8aa72b2-b90d-46db-b234-11750a915827.STIEPHZSYGBAMSJA.SEARCH&ppt=sp&ppn=sp&ssid=d63a5tqrao0000001592657200417&qH=6e03a440d0933138"
		},  
		"28": {
			"title": "Decor Villa Small Vinyl Sticker  (Pack of 1)",
			"category": "home applies",
			"price":"197",
			"desc": "Welcome To The Foremost Place On The Web To Find Artistic Designs Of Wall Decals And Wall Stickers.Wall Decals And Wall Stickers Are Self-Adhesive Vinyl Stickers Made For Applying To A Surface.They Are A Great Alternative To Wallpaper, Paint Or Stencils And They Give You Choice. Choose Your Space, Plan The Design You`D Like To Make, And Then Apply. They Are Extremely Durable And Are Available In Various Designs. Its Extremely Easy To Apply Them On Your Walls Or Any Flat,Smooth Surface. Disclaimer : All Pictures Are Digitally Enlarged To Provide, Better View Of The Product , Hence Picture Stands , No Reference For Product Size , Refer To The Name Of The Product For Selection Of Size Of The Product . You'll Receive Exact Size Products As Per Your Order. Background And Other Props Are Only For Depiction, They Will Not Be Included.",
			"url":"https://www.flipkart.com/decor-villa-small-vinyl-sticker/p/itmeqyppeh3uwnm3?pid=STIEQYPPHP34CZNZ&lid=LSTSTIEQYPPHP34CZNZDLW2B6&marketplace=FLIPKART&srno=s_5_199&otracker=search&otracker1=search&fm=SEARCH&iid=68de1757-0b2f-469b-b254-8d93f94b3fe1.STIEQYPPHP34CZNZ.SEARCH&ppt=sp&ppn=sp&ssid=d63a5tqrao0000001592657200417&qH=6e03a440d0933138"
		},  
		"29": {
			"title": "Decor Villa Large Vinyl Sticker  (Pack of 1)",
			"category": "home applies",
			"price":"217",
			"desc": "Welcome To The Foremost Place On The Web To Find Artistic Designs Of Wall Decals And Wall Stickers.Wall Decals And Wall Stickers Are Self-Adhesive Vinyl Stickers Made For Applying To A Surface.They Are A Great Alternative To Wallpaper, Paint Or Stencils And They Give You Choice. Choose Your Space, Plan The Design You`D Like To Make, And Then Apply. They Are Extremely Durable And Are Available In Various Designs. Its Extremely Easy To Apply Them On Your Walls Or Any Flat,Smooth Surface. Disclaimer : All Pictures Are Digitally Enlarged To Provide, Better View Of The Product , Hence Picture Stands , No Reference For Product Size , Refer To The Name Of The Product For Selection Of Size Of The Product . You'll Receive Exact Size Products As Per Your Order. Background And Other Props Are Only For Depiction, They Will Not Be Included.",
			"url":"https://www.flipkart.com/decor-villa-large-vinyl-sticker/p/itmeqwmxtztkndcx?pid=STIEQWMXZMMQQ6AQ&lid=LSTSTIEQWMXZMMQQ6AQ6RZARV&marketplace=FLIPKART&srno=s_6_240&otracker=search&otracker1=search&fm=SEARCH&iid=28b1f6aa-c525-48e4-bcc7-24f766aa55db.STIEQWMXZMMQQ6AQ.SEARCH&ppt=sp&ppn=sp&ssid=d63a5tqrao0000001592657200417&qH=6e03a440d0933138"
		},  
		"30": {
			"title": "Cortina Large Wall Sticker Sticker  (Pack of 1)",
			"category": "home applies",
			"price":"399",
			"desc": "Cortina Wall Stickers Decorate Your Home Just In Minutes. Wall Sticker Application Instruction Our Wall Decal Application Instructions Will Make It Easy For You To Apply Your Wall Decals. 1). The Surface You Wish To Attach Your Decal Must Be Clean And Free From Dust, Grease Or Any Other Contamination. 2). Simply Peel Those Pre-Cut Pieces Of Wall Stickers Off From Backing Paper And Apply Them On The Desired Area",
			"url":"https://www.flipkart.com/cortina-large-wall-sticker/p/itmeccjjngxbyqzy?pid=STIECCJJXG8SGVYC&lid=LSTSTIECCJJXG8SGVYCHHAUB0&marketplace=FLIPKART&srno=s_6_237&otracker=search&otracker1=search&fm=SEARCH&iid=28b1f6aa-c525-48e4-bcc7-24f766aa55db.STIECCJJXG8SGVYC.SEARCH&ppt=sp&ppn=sp&ssid=d63a5tqrao0000001592657200417&qH=6e03a440d0933138"
		},
		"31": {
			 "title": "Zurie Toy Collection Off Road Monster Racing Car, Remote Control , 1:20 Scale, Black  (Black)",
			"category": "toys",
			"price":"899",
			"desc": "Dominate any type of terrain with the all new off road 1:20 hummer electric rtr monster car. Featuring a full function transmitter, this awesome hummer monster car allows you to control every single move it makes with ease. But don't think this remote controlled hummer is only good for off reading because this bad boy can haul on and off the road. The body is extremely durable while the huge front and rear bumpers make this rc extremely rugged. The off road 1:20 monster hummer car comes with a rechargeable battery for the truck, a charger and a transmitter. This awesome rc car stand out whether it is night or day. A must have for fans of off reading, get the off road 1:20 hummer monster car today and have a blast.features:electric powered full function transmitter telescoping antenna rubber tires detailed design sturdy construction ready to run 1:20 scale.",
			"url":"https://www.flipkart.com/isweven-solid-winter-skull-hat-beanie-fashion-knitted-woolen-cap/p/itmeeg6w2arucsfj?pid=CAPEEG6W7CR2HNFW&lid=LSTCAPEEG6W7CR2HNFW6ESTAO&marketplace=FLIPKART&srno=s_1_13&otracker=search&otracker1=search&fm=SEARCH&iid=4be162a7-50f0-4231-aa58-fdf3d5cc1414.CAPEEG6WFFZ4YFXW.SEARCH&ppt=sp&ppn=sp&ssid=1wfi9ujr400000001592657925393&qH=4f4b914d6db35e19"
			}, 
		"32": {
			"title": "X ZINI Rechargeable 2-in-1 Flying Indoor Helicopter with Remote(Multicolor).  (Multicolor)",
			"category": "toys",
			"price":"499",
			"desc": "NA",
			"url":"https://www.flipkart.com/x-zini-rechargeable-2-in-1-flying-indoor-helicopter-remote-multicolor/p/itmfg3jvv4yppsfx?pid=RCTFGFDCVBJGTQEP&lid=LSTRCTFGFDCVBJGTQEPLKTAKU&marketplace=FLIPKART&spotlightTagId=BestsellerId_mgl%2F56m&srno=b_1_3&otracker=nmenu_sub_Baby%20%26%20Kids_0_Remote%20Control%20Toys&fm=SEARCH&iid=24676724-b6d7-41bd-9db6-e5106dbe5ab0.RCTFGFDCVBJGTQEP.SEARCH&ppt=browse&ppn=browse&ssid=36swd9i2n40000001592658261650"
		}, 
		"33": {
			"title": "AsianHobbyCrafts Waterproof Remote Controlled Rock Crawler RC Monster Truck, 4 Wheel Drive, 1:18 Scale  (Blue)",
			"category": "toys",
			"price":"1,349",
			"desc": "Take your radio control experience off road with the all new rock crawler. This off road radio control truck boasts articulated suspensions, two motors and low gearing to make for awesome rugged off road action. Rock crawler is 27 x 16 x 13 cm and sports both front and rear suspension. The rubber tires, tire rubber material is made of high quality pvc material is soft and elastic automatically adjusts based on the road and driving fast earthquake-resistant on uneven terrain, tire tread obvious: high friction, grip extremely strong skid resistance, does not fear the slippery road skid.",
			"url":"https://www.flipkart.com/asianhobbycrafts-waterproof-remote-controlled-rock-crawler-rc-monster-truck-4-wheel-drive-1-18-scale/p/itmfdp77gbx4r52p?pid=RCTFDNG6YMAHCWZW&lid=LSTRCTFDNG6YMAHCWZWDFIJAV&marketplace=FLIPKART&srno=b_1_4&otracker=nmenu_sub_Baby%20%26%20Kids_0_Remote%20Control%20Toys&fm=SEARCH&iid=24676724-b6d7-41bd-9db6-e5106dbe5ab0.RCTFDNG6YMAHCWZW.SEARCH&ppt=browse&ppn=browse&ssid=36swd9i2n40000001592658261650"
		}, 
		"34": {
			"title": "Shy Products Remote Control Famous Car I8 Electric Chargeable 3D Lightning  (Multicolor)",
			"category": "toys",
			"price":"435",
			"desc": "NA",
			"url":"https://www.flipkart.com/shy-products-remote-control-famous-car-i8-electric-chargeable-3d-lightning/p/itmf98sctcz4c65m?pid=RCTF97P7VTGVZFUK&lid=LSTRCTF97P7VTGVZFUK4L5XCL&marketplace=FLIPKART&srno=b_1_6&otracker=nmenu_sub_Baby%20%26%20Kids_0_Remote%20Control%20Toys&fm=SEARCH&iid=24676724-b6d7-41bd-9db6-e5106dbe5ab0.RCTF97P7VTGVZFUK.SEARCH&ppt=browse&ppn=browse&ssid=36swd9i2n40000001592658261650"
		}, 
		"35": {
			"title": "Rexter Flying Helicopter With Remote (R) RC Infraed Induction Aircraft Flashing Light  (Red)",
			"category": "toys",
			"price":"495",
			"desc": "100% brand new and high quality Body Material: ABS Plastic Dimension: 17.5 x 3.5 X 11cm (L x W x H ) Package Dimension: 23 x6 x 4.5cm (L x W x H) Flight Time: Approx. 6-8 minutes Charging Time: About 30 minutes Suitable for: Ages 3+ Dimension battery: 3.7v 75mah USB Charging Auto Start induction Instructions for operation: Slide switch to 'On' position Release the ball from your hand and let it fly up After about 2-3 seconds the propellers will begin to spin When the lights come on, hold the ball in a straight up position On the bottom of the helicopter you will find a small black on/off switch Package Content: 1 x Flying helicopter 1 x USB charging cable",
			"url":"https://www.flipkart.com/rexter-flying-helicopter-remote-r-rc-infraed-induction-aircraft-flashing-light/p/itmfesha2zxynjz6?pid=RCTFERZAZZPH6SEG&lid=LSTRCTFERZAZZPH6SEGAP1UU0&marketplace=FLIPKART&srno=b_1_7&otracker=nmenu_sub_Baby%20%26%20Kids_0_Remote%20Control%20Toys&fm=SEARCH&iid=24676724-b6d7-41bd-9db6-e5106dbe5ab0.RCTFERZAZZPH6SEG.SEARCH&ppt=browse&ppn=browse&ssid=36swd9i2n40000001592658261650"
		},  
		"36": {
			"title": "AsianHobbyCrafts Waterproof Remote Controlled Rock Crawler RC Monster Truck  (Blue)",
			"category": "toys",
			"price":"1,239",
			"desc": "Take your radio control experience off road with the all new rock crawler. This off road radio control truck boasts articulated suspensions, two motors and low gearing to make for awesome rugged off road action. Rock crawler is 27 x 16 x 13 cm and sports both front and rear suspension. The rubber tires, tire rubber material is made of high quality pvc material is soft and elastic automatically adjusts based on the road and driving fast earthquake-resistant on uneven terrain, tire tread obvious: high friction, grip extremely strong skid resistance, does not fear the slippery road skid.",
			"url":"https://www.flipkart.com/asianhobbycrafts-waterproof-remote-controlled-rock-crawler-rc-monster-truck/p/itmfhwpy3tzbbmg3?pid=RCTFHWMQCCYTRWZT&lid=LSTRCTFHWMQCCYTRWZTTXSCLZ&marketplace=FLIPKART&srno=b_1_8&otracker=nmenu_sub_Baby%20%26%20Kids_0_Remote%20Control%20Toys&fm=SEARCH&iid=24676724-b6d7-41bd-9db6-e5106dbe5ab0.RCTFHWMQCCYTRWZT.SEARCH&ppt=browse&ppn=browse&ssid=36swd9i2n40000001592658261650"
		},  
		"37": {
			"title": "NextGen HB Rock Crawler (Original) 1:18 Scale 4WD 2.4 Ghz 4x4 Rally Car  (Multicolor)",
			"category": "toys",
			"price":"1,244",
			"desc": "A 1:18 Scale 2.4 GHz 4 Wheel Drive Rock Crawler Rally Car with Rechargeable Batteries for the car and 3 AA Batteries for the 2.4G Transmitter, Charger are included The Rock Crawler's rubber tires material is made up of high quality PVC material .It is soft and elastic & can be adjusted based on the road Terrain and tough driving condition, Solid Frame Chassis, High Strength Composite Plastic Is Impact Resistant To Help Protect The Crawler.",
			"url":"https://www.flipkart.com/nextgen-hb-rock-crawler-original-1-18-scale-4wd-2-4-ghz-4x4-rally-car/p/itmesvmfz3p9ngta?pid=RCTESVMFHSQ43RXX&lid=LSTRCTESVMFHSQ43RXXUTN1G7&marketplace=FLIPKART&srno=b_1_10&otracker=nmenu_sub_Baby%20%26%20Kids_0_Remote%20Control%20Toys&fm=SEARCH&iid=24676724-b6d7-41bd-9db6-e5106dbe5ab0.RCTESVMFHSQ43RXX.SEARCH&ppt=browse&ppn=browse&ssid=36swd9i2n40000001592658261650"
		},  
		"38": {
			"title": "",
			"category": "toys",
			"price":"529",
			"desc": "It's almost every young boy’s dream to become race car driver one day! Watch your child’s eyes light up with amazement when you gift him this Mini Race Car from Miss & Chief. This life-like toy comes with a remote control and even has working headlights and rear lights.Radio Controlled Sporting driving functions, such as forward, reverse, stop, left and right, this car is remote controlled and easy to use.Life-like This race car has working headlights and rear lights, which makes it quite Life-like Spring Suspension SystemThis race car has a Spring Suspension System in place that facilitates smooth driving.",
			"url":"https://www.flipkart.com/miss-chief-mini-racing-4-channel-radio-control-rc-car/p/itmexbmgyshdqpgs?pid=RCTEUUZZJZTXQSPR&lid=LSTRCTEUUZZJZTXQSPRDVMAGP&marketplace=FLIPKART&srno=b_1_11&otracker=nmenu_sub_Baby%20%26%20Kids_0_Remote%20Control%20Toys&fm=SEARCH&iid=24676724-b6d7-41bd-9db6-e5106dbe5ab0.RCTEUUZZJZTXQSPR.SEARCH&ppt=browse&ppn=browse&ssid=36swd9i2n40000001592658261650"
		},  
		"39": {
			"title": "KidsBazaar Stunt Car with UniqueFlip  (Multicolor)",
			"category": "toys",
			"price":"410",
			"desc": "NA",
			"url":"https://www.flipkart.com/kidsbazaar-stunt-car-uniqueflip/p/itmb6c06c7b7a74e?pid=RCTFZNFF5EDKVMJM&lid=LSTRCTFZNFF5EDKVMJMDBUOCL&marketplace=FLIPKART&srno=b_1_12&otracker=nmenu_sub_Baby%20%26%20Kids_0_Remote%20Control%20Toys&fm=SEARCH&iid=24676724-b6d7-41bd-9db6-e5106dbe5ab0.RCTFZNFF5EDKVMJM.SEARCH&ppt=browse&ppn=browse&ssid=36swd9i2n40000001592658261650"
		},  
		"40": {
			"title": "Charnalia Singing Dancing Naughty robot  (White)",
			"category": "toys",
			"price":"399",
			"desc": "Its a Battery operated toy requires 3 AA batteries. Wonderful music in action.Has flashing lights Dancing Moment . The palm will be shining and the arm will sway up & down The robot rotates 360 degrees The robot has a spiral blade with rotation function & 5 different colors of light.",
			"url":"https://www.flipkart.com/charnalia-singing-dancing-naughty-robot/p/itmf6xgnhhs3kayb?pid=RCTF6XGFMHXDKAVF&lid=LSTRCTF6XGFMHXDKAVFXGPABO&marketplace=FLIPKART&srno=b_1_14&otracker=nmenu_sub_Baby%20%26%20Kids_0_Remote%20Control%20Toys&fm=SEARCH&iid=24676724-b6d7-41bd-9db6-e5106dbe5ab0.RCTF6XGFMHXDKAVF.SEARCH&ppt=browse&ppn=browse&ssid=36swd9i2n40000001592658261650"
		},
		"41": {
			 "title": "SAF Set of 3 Hexagon Large Buddha 6MM MDF Self Adhesive Digital Reprint 21 inch x 21 inch Painting",
			"category": "home decor",
			"price":"249",
			"desc": "Set of 3 Hexagon Large Buddha 6MM MDF Self Adhesive",
			"url":"https://www.flipkart.com/saf-set-3-hexagon-large-buddha-6mm-mdf-self-adhesive-digital-reprint-21-inch-x-painting/p/itm5b2fe7071f8c8?pid=PTGFQ29NZCRYAGXC&lid=LSTPTGFQ29NZCRYAGXCIUBFOR&marketplace=FLIPKART&srno=b_1_1&otracker=nmenu_sub_Home%20%26%20Furniture_0_Home%20Decor&fm=SEARCH&iid=en_YrNDO0XxOwnPH03YoFRjJhXWyicffKG61nTdeLTtMq%2B4%2BRABEkf6R9Y5Bcmr3a0OXa2MFff8oWgD1LV2DYOGpw%3D%3D&ppt=browse&ppn=browse&ssid=kxxnz8woxs0000001592658749426"
			},
		 "42":{
			 "title": "YASH ENTERPRISES Artificial Plant with Pot  (35 cm, Multicolor)",
			"category": "home decor",
			"price":"329",
			"desc": "Ourindoor Flowers is recommended as a gift for mom, dad, birthdays or as the perfect Housewarming present. The Flower Pot is a great addition for apartments that need to be decorated with a gorgeous indoor plant. Packed in a modern designed box, this kit is one of the best garden gifts to choose from. Buy it now for your loved ones and experience the excitement in growing Flowers indoors",
			"url":"https://www.flipkart.com/yash-enterprises-artificial-plant-pot/p/itmfeby9hjdhvr4s?pid=ARPFEAVV23T5RGHY&lid=LSTARPFEAVV23T5RGHYRDCWNX&marketplace=FLIPKART&srno=b_1_2&otracker=nmenu_sub_Home%20%26%20Furniture_0_Home%20Decor&fm=SEARCH&iid=en_YrNDO0XxOwnPH03YoFRjJhXWyicffKG61nTdeLTtMq%2BSGM9giU5ETVzc%2FjdsezMQt4BRfyUaf7nyWDH2aiQ52g%3D%3D&ppt=browse&ppn=browse&ssid=kxxnz8woxs0000001592658749426"
			},
		 "43":{
			 "title": "WolTop Extra Large PVC Wall paper Sticker  (Pack of 1)",
			"category": "home decor",
			"price":"329",
			"desc": "Wall Stickers Wallpaper Happy Winter Trees and Frames Home DIY Self Adhesive",
			"url":"https://www.flipkart.com/woltop-extra-large-pvc-wall-paper-sticker/p/itmfbb3krevwhukh?pid=STIFBB3KCVVXGPQA&lid=LSTSTIFBB3KCVVXGPQAVS43IO&marketplace=FLIPKART&spotlightTagId=BestsellerId_arb&srno=b_1_3&otracker=nmenu_sub_Home%20%26%20Furniture_0_Home%20Decor&fm=SEARCH&iid=28dceb0c-3f4d-47f0-b2a0-03f6cee03333.STIFBB3KCVVXGPQA.SEARCH&ppt=browse&ppn=browse&ssid=kxxnz8woxs0000001592658749426"
			},
		 "44":{
			 "title": "WolTop Extra Large PVC Wall paper Sticker  (Pack of 1)",
			"category": "home decor",
			"price":"329",
			"desc": "Wall Stickers Wallpaper Brown Natural Wood Design Wardrobe Furniture Decoration Self Adhesive",
			"url":"https://www.flipkart.com/woltop-extra-large-pvc-wall-paper-sticker/p/itmff8yz62zjgvdb?pid=STIFF8YZZTUFZUDY&lid=LSTSTIFF8YZZTUFZUDYI6NWJW&marketplace=FLIPKART&srno=b_1_4&otracker=nmenu_sub_Home%20%26%20Furniture_0_Home%20Decor&fm=SEARCH&iid=28dceb0c-3f4d-47f0-b2a0-03f6cee03333.STIFF8YZZTUFZUDY.SEARCH&ppt=browse&ppn=browse&ssid=kxxnz8woxs0000001592658749426"
			},
		 "45":{
			 "title": "WolTop Extra Large PVC Wall paper Sticker  (Pack of 1)",
			"category": "home decor",
			"price":"329",
			"desc": "Wall Stickers Wallpaper 3D Ivy Nature Restaurant Office Design Self Adhesive",
			"url":"https://www.flipkart.com/woltop-extra-large-pvc-wall-paper-sticker/p/itmff8yzhyang9ze?pid=STIFF8YZJZDZHEFP&lid=LSTSTIFF8YZJZDZHEFPP0LY9N&marketplace=FLIPKART&srno=b_1_5&otracker=nmenu_sub_Home%20%26%20Furniture_0_Home%20Decor&fm=SEARCH&iid=28dceb0c-3f4d-47f0-b2a0-03f6cee03333.STIFF8YZJZDZHEFP.SEARCH&ppt=browse&ppn=browse&ssid=kxxnz8woxs0000001592658749426"
			},
		 "46":{
			 "title": "WolTop Extra Large PVC Wall paper Sticker  (Pack of 1)",
			"category": "home decor",
			"price":"329",
			"desc": "Wall Stickers Wallpaper Self Adhesive Nature Rocks with Grass Cafe Restaurant Interior",
			"url":"https://www.flipkart.com/woltop-extra-large-pvc-wall-paper-sticker/p/itmfbb3kv7vxpjqf?pid=STIFBB3KV6F5Y5FC&lid=LSTSTIFBB3KV6F5Y5FCVXIVRO&marketplace=FLIPKART&srno=b_1_6&otracker=nmenu_sub_Home%20%26%20Furniture_0_Home%20Decor&fm=SEARCH&iid=28dceb0c-3f4d-47f0-b2a0-03f6cee03333.STIFBB3KV6F5Y5FC.SEARCH&ppt=browse&ppn=browse&ssid=kxxnz8woxs0000001592658749426"
			},
		 "47":{
			 "title": "WolTop Extra Large PVC Vinyl Wallpaper Sticker  (Pack of 1)",
			"category": "home decor",
			"price":"329",
			"desc": "Wall Wallpaper Blue Water Dew Drops Bubbles Modern Home Decoration",
			"url":"https://www.flipkart.com/woltop-extra-large-pvc-vinyl-wallpaper-sticker/p/itmf65g3xjg2g8we?pid=STIF65G3QSCTY3TB&lid=LSTSTIF65G3QSCTY3TBZ3P4FO&marketplace=FLIPKART&srno=b_1_7&otracker=nmenu_sub_Home%20%26%20Furniture_0_Home%20Decor&fm=SEARCH&iid=28dceb0c-3f4d-47f0-b2a0-03f6cee03333.STIF65G3QSCTY3TB.SEARCH&ppt=browse&ppn=browse&ssid=kxxnz8woxs0000001592658749426"
			},
		 "48":{
			 "title": "WolTop Extra Large PVC Wall paper Sticker  (Pack of 1)",
			"category": "home decor",
			"price":"329",
			"desc": "Wall Stickers Wallpaper Bricks Blocks Modern Bedroom Decor Self Adhesive",
			"url":"https://www.flipkart.com/woltop-extra-large-pvc-wall-paper-sticker/p/itmfbb3kyfz5rhsc?pid=STIFBB3KNP9G9KH9&lid=LSTSTIFBB3KNP9G9KH96USQ5D&marketplace=FLIPKART&srno=b_1_8&otracker=nmenu_sub_Home%20%26%20Furniture_0_Home%20Decor&fm=SEARCH&iid=28dceb0c-3f4d-47f0-b2a0-03f6cee03333.STIFBB3KNP9G9KH9.SEARCH&ppt=browse&ppn=browse&ssid=kxxnz8woxs0000001592658749426"
			},
		 "49":{
			 "title": "Aquire Extra Large Wall Stickers Sticker  (Pack of 1)",
			"category": "home decor",
			"price":"",
			"desc": "There’s nothing more soothing than a floral design to define the interiors of your bedroom and help you relax, which is why you should grab this wall sticker from Aquire, and lend your private space a refreshing appeal. PVC Vinyl As this wall sticker is made from PVC vinyl, it is waterproof, and hence durable.Colourful This huge wall sticker not only has flowers to brighten up your room, but it also has birds and butterflies to add to the décor.",
			"url":"https://www.flipkart.com/aquire-extra-large-wall-stickers-sticker/p/itmefzv3a4aghgzm?pid=STIEFZV3SY6FHFFA&lid=LSTSTIEFZV3SY6FHFFAM318O4&marketplace=FLIPKART&srno=b_1_9&otracker=nmenu_sub_Home%20%26%20Furniture_0_Home%20Decor&fm=SEARCH&iid=28dceb0c-3f4d-47f0-b2a0-03f6cee03333.STIEFZV3SY6FHFFA.SEARCH&ppt=browse&ppn=browse&ssid=kxxnz8woxs0000001592658749426"
			},
		 "50":{
			 "title": "WolTop Extra Large Self Adhesive Sticker  (Pack of 1)",
			"category": "home decor",
			"price":"329",
			"desc": "For complete installation process, please refer to the video provided in the description.",
			"url":"https://www.flipkart.com/woltop-extra-large-self-adhesive-sticker/p/itmfe9zxvhue24yh?pid=STIFE9ZXWDUTTT94&lid=LSTSTIFE9ZXWDUTTT94IO8ZDG&marketplace=FLIPKART&spotlightTagId=BestvalueId_arb&srno=b_1_10&otracker=nmenu_sub_Home%20%26%20Furniture_0_Home%20Decor&fm=SEARCH&iid=28dceb0c-3f4d-47f0-b2a0-03f6cee03333.STIFE9ZXWDUTTT94.SEARCH&ppt=browse&ppn=browse&ssid=kxxnz8woxs0000001592658749426"
			}	
		}

	//var data = JSON.parse(str) // dataset
var search_fields = ['title','desc','category'] //key fields to search for in dataset


$scope.search=function(keyword){
	$scope.results = []

    for(var i in data){ // iterate through dataset
        for(var u=0;u<search_fields.length;u++){ // iterate through each key in dataset

            var rel = getRelevance(data[i][search_fields[u]],keyword) // check if there are matches

            if(rel==0) // no matches...
                continue // ...skip

			$scope.results.push({relevance:rel,entry:data[i]}) // matches found, add to results and store relevance
        }
    }

    $scope.results.sort(compareRelevance) // sort by relevance

    for(i=0;i<$scope.results.length;i++){
        $scope.results[i] = $scope.results[i].entry // remove relevance since it is no longer needed
	}
	

	
	console.log($scope.results);

    return $scope.results;
}



function getRelevance(value,keyword){
    value = value.toLowerCase() // lowercase to make search not case sensitive
    keyword = keyword.toLowerCase()

    var index = value.indexOf(keyword) // index of the keyword
    var word_index = value.indexOf(' '+keyword) // index of the keyword if it is not on the first index, but a word

    if(index==0) // value starts with keyword (eg. for 'Dani California' -> searched 'Dan')
        return 3 // highest relevance
    else if(word_index!=-1) // value doesnt start with keyword, but has the same word somewhere else (eg. 'Dani California' -> searched 'Cali')
        return 2 // medium relevance
    else if(index!=-1) // value contains keyword somewhere (eg. 'Dani California' -> searched 'forn')
        return 1 // low relevance
    else
        return 0 // no matches, no relevance
}

function compareRelevance(a, b) {
  return b.relevance - a.relevance
}


});

app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});