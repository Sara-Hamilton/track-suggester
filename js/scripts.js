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

    if (companySizeAnswer === "large") {
      cSharp +=1, java +=1, php +=1
    }
    if (companySizeAnswer === "small") {
      ruby +=3
    }

    if (frontOrBackAnswer === "back") {
      php +=2
    }

    if (mobileAnswer === "yes") {
      java +=5
    }

    if (interactiveAnswer === "yes") {
      ruby +=1
    }
    if (interactiveAnswer === "no") {
      ruby -=1
    }

    if (demandAnswer === "yes") {
      cSharp +=1, java +=1, php +=1
    }
    if (demandAnswer === "no") {
      ruby +=1
    }

    if (osPreferenceAnswer === "mac") {
      ruby +=1
    }
    if (osPreferenceAnswer === "windows") {
      cSharp +=3
    }

    var highestValue = Math.max(cSharp, php, ruby, java);

    if (frontOrBackAnswer === "front") {
      var trackSuggestion = "CSS/Design"
    } else if (cSharp === highestValue) {
      var trackSuggestion = "C#"
    } else if (java === highestValue) {
      var trackSuggestion = "Java"
    } else if (php === highestValue) {
      var trackSuggestion = "PHP"
    } else {
      var trackSuggestion = "Ruby"
    }

    if (!companySizeAnswer && !frontOrBackAnswer && !mobileAnswer && !interactiveAnswer && !demandAnswer && !osPreferenceAnswer) {
      alert("Please answer at least one question.")
    } else {
      $("img").hide();
      $("#track").empty().append(trackSuggestion);
      $("#result").show();

      if (trackSuggestion === "CSS/Design") {
        $(".css").show();
      } else if (trackSuggestion === "C#") {
        $(".cSharp").show();
      } else if (trackSuggestion === "Java") {
        $(".java").show();
      } else if (trackSuggestion === "PHP") {
        $(".php").show();
      } else if (trackSuggestion === "Ruby") {
        $(".ruby").show();
      }
    }

    event.preventDefault();
  });
});
