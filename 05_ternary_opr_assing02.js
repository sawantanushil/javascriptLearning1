var TcsEligibileOrNOt=function(grauationScore,HSC,SSC,CandidatesName){
var result=grauationScore>=70||HSC>=80||SSC>=90?
`Congratulation! ${CandidatesName} Your are Eligiable for TCS Interview`
:`${CandidatesName} You are not Eligiable for TCS Interview`;
console.log(result);

}
TcsEligibileOrNOt(70,80,90,"Anushil");
TcsEligibileOrNOt(40,40,40,"Yogesh");
TcsEligibileOrNOt(70,40,50,"Amol");
