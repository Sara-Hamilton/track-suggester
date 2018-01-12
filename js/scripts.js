$ (document).ready(function(){
  $("#trackForm").submit(function(event){

    var companySizeAnswer = $("input:radio[name=companySize]:checked").val();
    var frontOrBackAnswer = $("input:radio[name=frontOrBack]:checked").val();
    var mobileAnswer = $("input:radio[name=mobile]:checked").val();
    var interactiveAnswer = $("input:radio[name=interactive]:checked").val();
    var demandAnswer = $("input:radio[name=demand]:checked").val();
    var osPreferenceAnswer = $("input:radio[name=osPreference]:checked").val();

    var cSharp = 0;
    var java = 0;
    var php = 0;
    var ruby = 0;
    var design = 0;

    if (companySizeAnswer = "large") {
      cSharp +=1, java +=1, php +=1
    }
    if (companySizeAnswer = "small") {
      ruby +=1
    }
    if (companySizeAnswer = "either") {
      cSharp +=1, java +=1, php +=1, ruby +=1
    }

    if (frontOrBackAnswer = "front") {
      design +=10
    }

    if (mobileAnswer = "yes") {
      java +=1
    }

    if (interactiveAnswer = "yes") {
      ruby +=1
    }
    if (interactiveAnswer = "no") {
      ruby -=1
    }

    if (demandAnswer = "yes") {
      cSharp +=1, java +=1, php +=1
    }
    if (demandAnswer = "no") {
      ruby +=1
    }

    if (osPreferenceAnswer = "mac") {
      ruby +=1
    }
    if (osPreferenceAnswer = "windows") {
      cSharp +=1
    }





    if (frontOrBackAnswer === "front") {
      var trackSuggestion = "CSS/Design"
    }

    $("#track").empty().append(trackSuggestion);
    $("#result").show();

    event.preventDefault();
  });
});
