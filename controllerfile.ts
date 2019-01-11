export class templatedriven implements OnInit {
  title = 'form';
  templatedriven: FormGroup;
  submitted = false;
  model: any = {
    lastname: '',
    f1: '999-99-9999',
    f2: false,
    f3: null,
    f4: null,
    f5: false,
    f6: 'No',
    f7: 'Unknown'
};
  hasError = false;
  errorText = '';

  constructor( private sc: service, private router: Router) {}
  ngOnInit() {

  }
  allfields(){

    this.sc.c.lobs.wcc.incidentReport = this.model.f1;
    this.sc.c.lobs.wcc.deathReport = this.model.f2;
    this.sc.c.lobs.wcc.fraudReport = this.model.f3;
    this.sc.c.lobs.wcc.seekTreatment = this.model.f4;
    this.sc.c.lobs.wcc.lostWages = this.model.f5;
    this.sc.c.lobs.wcc.hasGroupHealthInsurance = this.model.f6;
    this.sc.c.lobs.wcc.injuryIncident.injured.lastName = this.model.f7;
  }
  onSubmit() {
   //  this.allfields();
    this.sc.c.lobs = new Lobs();
    this.sc.c.lobs.wcc = new wcc();
    this.sc.c.lobs.wcc.injuryIncident = new InjuryIncident();
    this.sc.c.lobs.wcc.injuryIncident.injured = new Injured();
    this.sc.c.lobs.wcc.incidentReport = this.model.incidentReport;
    this.sc.c.lobs.wcc.deathReport = this.model.deathReport;
    this.sc.c.lobs.wcc.fraudReport = this.model.fraudReport;
    this.sc.c.lobs.wcc.seekTreatment = this.model.seekTreatment;
    this.sc.c.lobs.wcc.lostWages = this.model.lostWages;
    this.sc.c.lobs.wcc.hasGroupHealthInsurance = this.model.hasGroupHealthInsurance;
    this.sc.c.lobs.wcc.injuryIncident.injured.lastName = this.model.lastname;
    this.submitted = true;
  //  this.allfields();

    const ssn =  this.model.ssn;
    const ssns =  ssn.split('-');
    let formattedSSN =  '';
    ssns.forEach((element) => {
      formattedSSN =  formattedSSN + element;
    });
    this.sc.c.lobs.wcc.injuryIncident.injured.socialSecurity = formattedSSN;



    this.sc.ca().subscribe( (res: c) => {

      this.sc.c = res;

      this.sc.c.lobs.wcc.injuryIncident.injured.socialSecurity = formattedSSN;

      this.sc.c.lobs.wcc.f1 = this.model.f1;
      this.sc.c.lobs.wcc.f2 = this.model.f2;
      this.sc.c.lobs.wcc.f3 = this.model.f3;
      this.sc.c.lobs.wcc.f4 = this.model.f4;

      this.router.navigateByUrl('/nexturl');
    }, (err) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred.
        this.hasError = true;
      //  this.isSuccess = false;
        this.errorText =
          'Please check your connection and try again.';
      } else {
        // The backend returned an unsuccessful response code.
     //   this.isSuccess = false;
        this.hasError = true;
        this.errorText =
          'We couldn\'t you entered. ' +
          'Please try again.;
      }
    });
  }
}
