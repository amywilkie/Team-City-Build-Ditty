$(document).ready(function() {

$("td.buildConfigurationName IMG[src *= 'success.gif']")
.parents("table")
.addClass("buildSuccess");

$("td.buildConfigurationName IMG[src *= 'error.gif']")
.parents("table")
.addClass("buildFailure");

$("td.buildConfigurationName IMG[src *= 'buildGray.gif']")
.parents("table")
.addClass("buildUnknown");

$("DIV.teamCityDateTime").each(
function(index) {
var spanStr = $(this).find("SPAN.date").attr("title");
$(this).replaceWith("<span class='buildDate'>Last built: " + spanStr + "</span>");
}
);
});
