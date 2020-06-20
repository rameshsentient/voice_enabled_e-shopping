function restore(){
  $("#record, #live").removeClass("disabled");
  $("#pause").replaceWith('<a class="button one" id="pause">Pause</a>');
  $(".one").addClass("disabled");
  Fr.voice.stop();
}

function makeWaveform(){
  var analyser = Fr.voice.recorder.analyser;

  var bufferLength = analyser.frequencyBinCount;
  var dataArray = new Uint8Array(bufferLength);

 
}
$(document).ready(function(){
  $(document).on("mousedown", "#record:not(.disabled)", function(){
	  console.log("ASR REC START");
    setLoder();
	  Fr.voice.record($("#live").is(":checked"), function(){
      $(".recordButton").addClass("disabled");

      $("#live").addClass("disabled");
      $(".one").removeClass("disabled");

      makeWaveform();
    });
  });

  $(document).on("click", "#recordFor5:not(.disabled)", function(){
    Fr.voice.record($("#live").is(":checked"), function(){
      $(".recordButton").addClass("disabled");

      $("#live").addClass("disabled");
      $(".one").removeClass("disabled");

      makeWaveform();
    });

    Fr.voice.stopRecordingAfter(5000, function(){
      alert("Recording stopped after 5 seconds");
    });
  });

  $(document).on("click", "#pause:not(.disabled)", function(){
    if($(this).hasClass("resume")){
      Fr.voice.resume();
      $(this).replaceWith('<a class="button one" id="pause">Pause</a>');
    }else{
      Fr.voice.pause();
      $(this).replaceWith('<a class="button one resume" id="pause">Resume</a>');
    }
  });

  $(document).on("click", "#stop:not(.disabled)", function(){
    restore();
  });

  $(document).on("click", "#play:not(.disabled)", function(){
    if($(this).parent().data("type") === "mp3"){
      Fr.voice.exportMP3(function(url){
        $("#audio").attr("src", url);
        $("#audio")[0].play();
      }, "URL");
    }else{
      Fr.voice.export(function(url){
        $("#audio").attr("src", url);
        $("#audio")[0].play();
      }, "URL");
    }
    restore();
  });

  $(document).on("click", "#download:not(.disabled)", function(){
    if($(this).parent().data("type") === "mp3"){
      Fr.voice.exportMP3(function(url){
        $("<a href='" + url + "' download='MyRecording.mp3'></a>")[0].click();
      }, "URL");
    }else{
      Fr.voice.export(function(url){
        $("<a href='" + url + "' download='MyRecording.wav'></a>")[0].click();
      }, "URL");
    }
    restore();
  });

  $(document).on("mouseup", "#record:not(.disabled)", function(){	 
    console.log("ASR START");
    resetLoader();
      Fr.voice.export(function(url){
        console.log("Here is the base64 URL : " + url);
		getText(url);

      }, "base64");
    restore();
  });

  $(document).on("click", "#save:not(.disabled)", function(){
    function upload(blob){
      var formData = new FormData();
      formData.append('file', blob);

      $.ajax({
        url: "upload.php",
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function(url) {
          $("#audio").attr("src", url);
          $("#audio")[0].play();
          alert("Saved In Server. See audio element's src for URL");
        }
      });
    }
    if($(this).parent().data("type") === "mp3"){
      Fr.voice.exportMP3(upload, "blob");
    }else{
      Fr.voice.export(upload, "blob");
    }
    restore();
  });
});

var countArray = ["0"];
var y = 1;
function getText(base64Text) {

  $("#loader").css("visibility", "visible");
  $("#record").css("display", "none");


var start_time = new Date().getTime();
	var language = 0;
	var url="https://api.sentient.io/asr/prod/asreng";
	if(language==1){
		url="https://api.sentient.io/asr/prod/asrsch";
	}
	
	var lastItem = countArray.pop();
	var x = parseInt(lastItem);

	 $.ajax({
		method: 'POST',	
		headers:{'x-api-key':"0614A13555F140B4B23D"},
		contentType: 'application/json',
		url: url,
		data: JSON.stringify({"audio" : base64Text, "language" : language}),
		timeout: 80000,
		success: function(res){

      console.log(res);

      $("#keyword").val(res.text.trim());
      $("#keyword").focus();
      resetLoader();
		},
		error:function(err){
      console.log(res);
      resetLoader();
		}		
	});	 
}

function clearAll() {
	$("#disableDiv").css("display", "none");
}

function setLoder() {
  $("#keyword").val("");
  $("#record").removeClass("btn-round-white");
  $("#record").addClass("btn-round-red");
  
}

function resetLoader(){
  $("#loader").css("visibility", "hidden");
  $("#record").removeClass("btn-round-red");
  $("#record").addClass("btn-round-white");
  $("#record").css("display", "block");
}