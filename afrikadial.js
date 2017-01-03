// AFRIKADIAL
var baseUrl = 'http://jalapenodigital.co.za/images/Africa-flags/';
var dialObj = {
				//CENTRAL AFRICA
				AO: {flag: baseUrl + 'ao.png',name: 'Angola',area_code: '+244'},
				CM: {flag: baseUrl + 'cm.png',name: 'Cameroon',area_code: '+237'},
				CF: {flag: baseUrl + 'cf.png',name: 'Central African Republic',area_code: '+236'},
				TD: {flag: baseUrl + 'td.png',name: 'Chad',area_code: '+235'},
				CD: {flag: baseUrl + 'cd.png',name: 'Democratic Rebublic of the Congo',area_code: '+243'},
				CG: {flag: baseUrl + 'cg.png',name: 'Republic of the Congo',area_code: '+242'},
				GQ: {flag: baseUrl + 'gq.png',name: 'Equatorial Guinea',area_code: '+240'},
				GA: {flag: baseUrl + 'ga.png',name: 'Gabon',area_code: '+241'},
				ST: {flag: baseUrl + 'st.png',name: 'São Tomé and Príncipe',area_code: '+239'},
				//EAST AFRICA
				BI: {flag: baseUrl + 'bi.png',name: 'Burundi',area_code: '+257'},
				KM: {flag: baseUrl + 'km.png',name: 'Comoros',area_code: '+269'},
				KE: {flag: baseUrl + 'ke.png',name: 'Kenya',area_code: '+254'},
				MG: {flag: baseUrl + 'mg.png',name: 'Madagascar',area_code: '+261'},
				MW: {flag: baseUrl + 'mw.png',name: 'Malawi',area_code: '+265'},
				MU: {flag: baseUrl + 'mu.png',name: 'Mauritius',area_code: '+230'},
				YT: {flag: baseUrl + 'yt.png',name: 'Mayotte (France)',area_code: '+262'},
				MZ: {flag: baseUrl + 'mz.png',name: 'Mozambique',area_code: '+258'},
				RE: {flag: baseUrl + 're.png',name: 'Réunion (France)',area_code: '+262'},
				RW: {flag: baseUrl + 'rw.png',name: 'Rwanda',area_code: '+250'},
				SC: {flag: baseUrl + 'sc.png',name: 'Seychelles',area_code: '+248'},
				TZ: {flag: baseUrl + 'tz.png',name: 'Tanzania',area_code: '+255'},
				UG: {flag: baseUrl + 'ug.png',name: 'Uganda',area_code: '+256'},
				//HORN
				DJ: {flag: baseUrl + 'dj.png',name: 'Djibouti',area_code: '+253'},
				ER: {flag: baseUrl + 'er.png',name: 'Eritrea',area_code: '+291'},
				ET: {flag: baseUrl + 'et.png',name: 'Ethiopia',area_code: '+251'},
				SO: {flag: baseUrl + 'so.png',name: 'Somalia',area_code: '+252'},
				//NORTH AFRICA
				DZ: {flag: baseUrl + 'dz.png',name: 'Algeria',area_code: '+213'},
				EG: {flag: baseUrl + 'eg.png',name: 'Egypt',area_code: '+20'},
				LY: {flag: baseUrl + 'ly.png',name: 'Libya',area_code: '+218'},
				MA: {flag: baseUrl + 'ma.png',name: 'Morocco',area_code: '+212'},
				SS: {flag: baseUrl + 'ss.png',name: 'South Sudan',area_code: '+211'},
				SD: {flag: baseUrl + 'sd.png',name: 'Sudan',area_code: '+249'},
				TN: {flag: baseUrl + 'tn.png',name: 'Tunisia',area_code: '+216'},
				//SOUTHERN AFRICA
				BW: {flag: baseUrl + 'bw.png',name: 'Botswana',area_code: '+267'},
				LS: {flag: baseUrl + 'ls.png',name: 'Lesotho',area_code: '+266'},
				NA: {flag: baseUrl + 'na.png',name: 'Namibia',area_code: '+264'},
				ZA: {flag: baseUrl + 'za.png',name: 'South Africa',area_code: '+27'},
				SZ: {flag: baseUrl + 'sz.png',name: 'Swaziland',area_code: '+268'},
				ZM: {flag: baseUrl + 'zm.png',name: 'Zambia',area_code: '+260'},
				ZW: {flag: baseUrl + 'zw.png',name: 'Zimbabwe',area_code: '+263'},
				//WEST AFRICA
				SH: {flag: baseUrl + 'sh.png',name: 'Ascension Island (UK)',area_code: '+247'},
				BJ: {flag: baseUrl + 'bj.png',name: 'Benin',area_code: '+229'},
				BF: {flag: baseUrl + 'bf.png',name: 'Burkina Faso',area_code: '+226'},
				CV: {flag: baseUrl + 'cv.png',name: 'Cape Verde',area_code: '+238'},
				CI: {flag: baseUrl + 'ci.png',name: 'Ivory Coast',area_code: '+225'},
				GM: {flag: baseUrl + 'gm.png',name: 'Gambia',area_code: '+220'},
				GH: {flag: baseUrl + 'gh.png',name: 'Ghana',area_code: '+233'},
				GN: {flag: baseUrl + 'gn.png',name: 'Guinea',area_code: '+224'},
				GW: {flag: baseUrl + 'gw.png',name: 'Guinea-Bissau',area_code: '+245'},
				LR: {flag: baseUrl + 'lr.png',name: 'Liberia',area_code: '+231'},
				ML: {flag: baseUrl + 'ml.png',name: 'Mali',area_code: '+223'},
				MR: {flag: baseUrl + 'mr.png',name: 'Mauritania',area_code: '+222'},
				NE: {flag: baseUrl + 'ne.png',name: 'Niger',area_code: '+227'},
				NG: {flag: baseUrl + 'ng.png',name: 'Nigeria',area_code: '+234'},
				SH: {flag: baseUrl + 'sh.png',name: 'Saint Helena (UK)',area_code: '+290'},
				SN: {flag: baseUrl + 'sn.png',name: 'Senegal',area_code: '+221'},
				SL: {flag: baseUrl + 'sl.png',name: 'Sierra Leone',area_code: '+232'},
				TG: {flag: baseUrl + 'tg.png',name: 'Togo',area_code: '+228'},
}

$(function () {
	
	$(document).delegate('#cc,#cc-flag','click',function() {
		
		$('.afrika-container').css('transition','all 0s')
							.css('opacity','0')
							.css('display','block');
		setTimeout(function () {
						$('.afrika-container').css('transition','all 0.5s')
												.css('opacity','1')
			},10);	
	});
	
	$(document).delegate('.afrika-item-container','click', function() {
		$('#cc').val($(this).attr('data-code'));
		$('.afrika-container').css('display','none');	
		$('#cc-flag').css('background-image',$(this).children().first().css('background-image'));
	});
})
function afrikalist($elem) {
	var $li, $css, $container;
	
	$('body').prepend('<div class="afrika-container"></div>');
	$($elem).css('position','relative');
	$($elem).append('<input class="area-code" id="cc"name="area-code" type="text" required placeholder="+27">\
						<div id="cc-flag"> </div>\
	</input>');	
	for (var key in dialObj) {
	  if (dialObj.hasOwnProperty(key)) {
		$item = '<div class="afrika-item-container" data-code='+dialObj[key].area_code+'> \
					<div class="afrika-flag" style="background-image: url('+dialObj[key].flag+')"> </div>\
					<div class="afrika-text">'+dialObj[key].name+'</div>\
		</div>'
		
		$('.afrika-container').append($item);
	  }
	}
}

$(document).ready(function () {
	$css = '<link href="http://jalapenodigital.co.za/images/Africa-flags/afrikadial.css" rel="stylesheet" type="text/css">';
	$('head').prepend($css);
	
});