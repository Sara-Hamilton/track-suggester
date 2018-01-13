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
      var link = '<a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a>'
    } else if (cSharp === highestValue) {
      var trackSuggestion = "C#"
      var link = '<a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank">C#</a>'
    } else if (java === highestValue) {
      var trackSuggestion = "Java"
      var link = '<a href="https://www.oracle.com/java/index.html" target="_blank">Java</a>'
    } else if (php === highestValue) {
      var trackSuggestion = "PHP"
      var link = '<a href="http://www.php.net/" target="_blank">PHP</a>'
    } else {
      var trackSuggestion = "Ruby"
      var link = '<a href="https://www.ruby-lang.org/en/" target="_blank">Ruby</a>'
    }

    if (!companySizeAnswer && !frontOrBackAnswer && !mobileAnswer && !interactiveAnswer && !demandAnswer && !osPreferenceAnswer) {
      alert("Please answer at least one question.")
    } else {
      $("#trackForm").hide();
      $("img").hide();
      $("#link").empty().append(link);
      $("#result").show();

      if (trackSuggestion === "CSS/Design") {
        $(".css").fadeIn();
      } else if (trackSuggestion === "C#") {
        $(".cSharp").fadeIn();
      } else if (trackSuggestion === "Java") {
        $(".java").fadeIn();
      } else if (trackSuggestion === "PHP") {
        $(".php").fadeIn();
      } else if (trackSuggestion === "Ruby") {
        $(".ruby").fadeIn();
      }
    }

    event.preventDefault();
  });
});
