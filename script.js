const tooltips = document.querySelectorAll('.tt');
tooltips.forEach(t => {new bootstrap.Tooltip(t)} )


function calculeSalaire(){
const nombreHeure = parseFloat(document.getElementById('NombreHeure').value);    
const tauxHoraire = parseFloat(document.getElementById('TauxHoraire').value);
const nombreHeureTS = parseFloat(document.getElementById('NombreHeureTS').value);
const nombreHeureNuit = parseFloat(document.getElementById('NombreHeureNuit').value);

let revenue = (nombreHeure * tauxHoraire) + (nombreHeureTS * (tauxHoraire * 1.5)) + (nombreHeureNuit * 1.1);
revenue = revenue.toFixed(2);
document.getElementById("resultat_brut").innerHTML =  `Total Brut: ${revenue} <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="N'inclut pas le montant 'Avant Imposable' qui depend de ton abonnement parking">
        ?
      </button>`;
document.getElementById("titre").innerHTML =  "Releve des retenus potentiel";

/*Afficher les retenues*/
const rrq = (revenue * 0.06).toFixed(2);
const impoFed = (revenue * 0.08).toFixed(2);
const rqap = (revenue * 0.049).toFixed(2);
const cotAE = (revenue * 0.02).toFixed(2);
const impoProv = (revenue * 0.1).toFixed(2);
const afpcros = (revenue * 0.02).toFixed(2);
const salaireNet = (revenue - rrq - impoFed - rqap - cotAE - impoProv - afpcros).toFixed(2);
document.getElementById("retenues").innerHTML = ` <h3>Retenues</h3> RRQ/RPC :  ${rrq}  <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Regime de retraite du Canada (environ 6% du salaire brut)">
        ?
      </button>
      IMP FED: ${impoFed} <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Impot Federal varie selon ton salaire (mit a 8% pour une estimation)">
        ?
      </button><br></br>
      RQAP: ${rqap} <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Regime quebecois d'assurance parentale">
        ?
      </button>
      COT A-E: ${cotAE} <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Cotisation additionnelle pour les services de santé et les services sociaux">
        ?
      </button><br></br>
      IMP PROV: ${impoProv} <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Impot Provencial du Quebec sur le revenu (mit a 10% pour estimation, mais varie selon le salaire annuel)">
        ?
      </button>
      AFPCROS: ${afpcros} <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Retenu du Syndicat environ 2% du salaire brut">
        ?
      </button><br></br>
      Salaire Net: ${salaireNet} <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Salaire brut moins retenues">
      ?
    </button>`
      ;


}