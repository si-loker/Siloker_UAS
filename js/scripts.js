$(document).on("click", ".action-buttons .dropdown-menu", function(e){
	e.stopPropagation();
});

/**
 * Function that gets the data of the profile in case
 * thar it has already saved in localstorage. Only the
 * UI will be update in case that all data is available
 *
 * A not existing key in localstorage return null
 *
 */
function validasi(){
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    if ( username == "fani" && password == "123"){
    alert ("Login suksess");
    window.location = "./index_admin.html";
    }
        else if(username =="" || password ==""){
            alert("Masukan username dan password Anda");
            return false;
    }
        else{
            alert("Username atau password yang Anda masukan SALAH");
            return false;
    }
    }

    function validateloker() {
        if (document.forms["formPendaftaran"]["nama"].value == "") {
            alert("Nama Perusahaan Tidak Boleh Kosong");
            document.forms["formPendaftaran"]["nama"].focus();
            return false;
        }
        if (document.forms["formPendaftaran"]["bidangusaha"].selectedIndex < 1) {
            alert("Pilih Bidang Usaha.");
            document.forms["formPendaftaran"]["bidangusaha"].focus();
            return false;
        }
        if (document.forms["formPendaftaran"]["dklowongan"].value == "") {
            alert("Deskrpsi Lowongan Tidak Boleh Kosong");
            document.forms["formPendaftaran"]["dklowongan"].focus();
            return false;
        }
        if (document.forms["formPendaftaran"]["dkkualifikasi"].value == "") {
            alert("Kualifikasi Lowongan Tidak Boleh Kosong");
            document.forms["formPendaftaran"]["dkkualifikasi"].focus();
            return false;
        }
        if (document.forms["formPendaftaran"]["email"].value == "") {
            alert("Email Tidak Boleh Kosong");
            document.forms["formPendaftaran"]["email"].focus();
            return false;
        }
        if (document.forms["formPendaftaran"]["web"].value == "") {
            alert("Alamat WEB Tidak Boleh Kosong");
            document.forms["formPendaftaran"]["web"].focus();
            return false;
        }
    }

function runPopup(){
        window.alert("Logout Berhasil");
        window.location = "./login.html";
        }

function getLocalProfile(callback){
    var profileImgSrc      = localStorage.getItem("PROFILE_IMG_SRC");
    var profileName        = localStorage.getItem("PROFILE_NAME");
    var profileReAuthEmail = localStorage.getItem("PROFILE_REAUTH_EMAIL");

    if(profileName !== null
            && profileReAuthEmail !== null
            && profileImgSrc !== null) {
        callback(profileImgSrc, profileName, profileReAuthEmail);
    }
}

/**
 * Main function that load the profile if exists
 * in localstorage
 */


/**
 * function that checks if the browser supports HTML5
 * local storage
 *
 * @returns {boolean}
 */
function supportsHTML5Storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

/**
 * Test data. This data will be safe by the web app
 * in the first successful login of a auth user.
 * To Test the scripts, delete the localstorage data
 * and comment this call.
 *
 * @returns {boolean}
 */
function testLocalStorageData() {
    if(!supportsHTML5Storage()) { return false; }
    localStorage.setItem("PROFILE_IMG_SRC", "//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" );
    localStorage.setItem("PROFILE_NAME", "César Izquierdo Tello");
    localStorage.setItem("PROFILE_REAUTH_EMAIL", "oneaccount@gmail.com");
}

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	var actions = $("table td:last-child").html();
	// Append table with add row form on add new button click
    $(".add-new").click(function(){
		$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="name" id="name"></td>' +
            '<td><input type="text" class="form-control" name="department" id="department"></td>' +
            '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
            '<td><input type="text" class="form-control" name="name" id="name"></td>' +
            '<td><input type="text" class="form-control" name="department" id="department"></td>' +
            '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
			'<td>' + actions + '</td>' +
        '</tr>';
    	$("table").append(row);		
		$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });
	// Add row on add button click
	$(document).on("click", ".add", function(){
		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
			if(!$(this).val()){
				$(this).addClass("error");
				empty = true;
			} else{
                $(this).removeClass("error");
            }
		});
		$(this).parents("tr").find(".error").first().focus();
		if(!empty){
			input.each(function(){
				$(this).parent("td").html($(this).val());
			});			
			$(this).parents("tr").find(".add, .edit").toggle();
			$(".add-new").removeAttr("disabled");
		}		
    });
	// Edit row on edit button click
	$(document).on("click", ".edit", function(){		
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
		});		
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");
    });
	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
		$(".add-new").removeAttr("disabled");
    });
});




