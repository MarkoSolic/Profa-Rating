<template>
  <div>
    <form @submit.prevent="form">
      <div class="card">
        <div class="card-header">
          <h2>*</h2>
          <p>Koliko ste redovito pohađali nastavu na kolegiju?</p>
        </div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question1"
              value="1"
              v-model="forma.prvo"
            />
            <label class="checkboxtext" for="option1">0-20%</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question1"
              value="2"
              v-model="forma.prvo"
            />
            <label class="checkboxtext" for="2">20-40%</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question1"
              value="3"
              v-model="forma.prvo"
            />
            <label class="checkboxtext" for="3">40-60%</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question1"
              value="4"
              v-model="forma.prvo"
            />
            <label class="checkboxtext" for="4">60-80%</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question1"
              value="5"
              v-model="forma.prvo"
            />
            <label class="checkboxtext" for="5">80-100%</label>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>*</h2>
          <p>Koja vam je najčešća ocjena u indeksu?</p>
        </div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question2"
              value="2"
              v-model="forma.drugo"
            />
            <label class="checkboxtext" for="2">2</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question2"
              value="3"
              v-model="forma.drugo"
            />
            <label class="checkboxtext" for="3">3</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question2"
              value="4"
              v-model="forma.drugo"
            />
            <label class="checkboxtext" for="4">4</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question2"
              value="5"
              v-model="forma.drugo"
            />
            <label class="checkboxtext" for="5">5</label>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>*</h2>
          <p>Koliko vam je sadržaj kolegija bio zanimljiv?</p>
          <p>(1- posve nezanimljiv, 5- veoma zanimljiv)</p>
        </div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question3"
              value="1"
              v-model="forma.trece"
            />
            <label class="checkboxtext" for="option1">1</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option2"
              name="question3"
              value="2"
              v-model="forma.trece"
            />
            <label class="checkboxtext" for="2">2</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option3"
              name="question3"
              value="3"
              v-model="forma.trece"
            />
            <label class="checkboxtext" for="3">3</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option4"
              name="question3"
              value="4"
              v-model="forma.trece"
            />
            <label class="checkboxtext" for="4">4</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option5"
              name="question3"
              value="5"
              v-model="forma.trece"
            />
            <label class="checkboxtext" for="5">5</label>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>*</h2>
          <p>Koliko su zahtjevi kolegija bili jasni?</p>
          <p>(1- posve nejasni, 5- u potpunosti jasni))</p>
        </div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question4"
              value="1"
              v-model="forma.cetvrto"
            />
            <label class="checkboxtext" for="option1">1</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option2"
              name="question4"
              value="2"
              v-model="forma.cetvrto"
            />
            <label class="checkboxtext" for="2">2</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option3"
              name="question4"
              value="3"
              v-model="forma.cetvrto"
            />
            <label class="checkboxtext" for="3">3</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option4"
              name="question4"
              value="4"
              v-model="forma.cetvrto"
            />
            <label class="checkboxtext" for="4">4</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option5"
              name="question4"
              value="5"
              v-model="forma.cetvrto"
            />
            <label class="checkboxtext" for="5">5</label>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>*</h2>
          <p>Je li nastavno gradivo bilo predstavljeno logičnim slijedom?</p>
          <p>(1 - uopće se na slažem, 5 - u potpunosti se slažem)</p>
        </div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question5"
              value="1"
              v-model="forma.peto"
            />
            <label class="checkboxtext" for="option1">1</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option2"
              name="question5"
              value="2"
              v-model="forma.peto"
            />
            <label class="checkboxtext" for="2">2</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option3"
              name="question5"
              value="3"
              v-model="forma.peto"
            />
            <label class="checkboxtext" for="3">3</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option4"
              name="question5"
              value="3"
              v-model="forma.peto"
            />
            <label class="checkboxtext" for="4">4</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option5"
              name="question5"
              value="5"
              v-model="forma.peto"
            />
            <label class="checkboxtext" for="5">5</label>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>*</h2>
          <p>Je li količina gradiva (kod predavanja) odnosno količina obveza (kod seminara / vježbi) primjerena broju ECTS-a?</p>
        </div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question6"
              value="1"
              v-model="forma.sesto"
            />
            <label class="checkboxtext" for="option1">prevelika</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option2"
              name="question6"
              value="2"
              v-model="forma.sesto"
            />
            <label class="checkboxtext" for="2">primjerena</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option3"
              name="question6"
              value="3"
              v-model="forma.sesto"
            />
            <label class="checkboxtext" for="3">premala</label>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>*</h2>
          <p>Jesu li nastavni materijali dostupni?</p>
          <p>(1- posve nedostupni, 5 - posve dostupni)</p>
        </div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question7"
              value="1"
              v-model="forma.sedmo"
            />
            <label class="checkboxtext" for="option1">1</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option2"
              name="question7"
              value="2"
              v-model="forma.sedmo"
            />
            <label class="checkboxtext" for="2">2</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option3"
              name="question7"
              value="3"
              v-model="forma.sedmo"
            />
            <label class="checkboxtext" for="3">3</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option4"
              name="question7"
              value="3"
              v-model="forma.sedmo"
            />
            <label class="checkboxtext" for="4">4</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option5"
              name="question7"
              value="5"
              v-model="forma.sedmo"
            />
            <label class="checkboxtext" for="5">5</label>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>*</h2>
          <p>U kojoj su mjeri korišteni nastavni materijali bili korisni za razumijevanje gradiva?</p>
          <p>(1 – posve beskorisni, 5 – u potpunosti korisni)</p>
        </div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question8"
              value="1"
              v-model="forma.osmo"
            />
            <label class="checkboxtext" for="option1">1</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option2"
              name="question8"
              value="2"
              v-model="forma.osmo"
            />
            <label class="checkboxtext" for="2">2</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option3"
              name="question8"
              value="3"
              v-model="forma.osmo"
            />
            <label class="checkboxtext" for="3">3</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option4"
              name="question8"
              value="3"
              v-model="forma.osmo"
            />
            <label class="checkboxtext" for="4">4</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option5"
              name="question8"
              value="5"
              v-model="forma.osmo"
            />
            <label class="checkboxtext" for="5">5</label>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>*</h2>
          <p>Smatrate li da ćete znanja i vještine stečene u okviru kolegija moći primijeniti u praksi?</p>
          <p>(1 – uopće se ne slažem, 5 – u potpunosti se slažem)</p>
        </div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question9"
              value="1"
              v-model="forma.deveto"
            />
            <label class="checkboxtext" for="option1">1</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option2"
              name="question9"
              value="2"
              v-model="forma.deveto"
            />
            <label class="checkboxtext" for="2">2</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option3"
              name="question9"
              value="3"
              v-model="forma.deveto"
            />
            <label class="checkboxtext" for="3">3</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option4"
              name="question9"
              value="3"
              v-model="forma.deveto"
            />
            <label class="checkboxtext" for="4">4</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option5"
              name="question9"
              value="5"
              v-model="forma.deveto"
            />
            <label class="checkboxtext" for="5">5</label>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>*</h2>
          <p>Je li nastavno gradivo kod vas potaknulo dodatni interes za područjem koje obrađuje?</p>
          <p>(1 – uopće se ne slažem, 5 – u potpunosti se slažem)</p>
        </div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question10"
              value="1"
              v-model="forma.deseto"
            />
            <label class="checkboxtext" for="option1">1</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option2"
              name="question10"
              value="2"
              v-model="forma.deseto"
            />
            <label class="checkboxtext" for="2">2</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option3"
              name="question10"
              value="3"
              v-model="forma.deseto"
            />
            <label class="checkboxtext" for="3">3</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option4"
              name="question10"
              value="3"
              v-model="forma.deseto"
            />
            <label class="checkboxtext" for="4">4</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option5"
              name="question10"
              value="5"
              v-model="forma.deseto"
            />
            <label class="checkboxtext" for="5">5</label>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>*</h2>
          <p>Je li sadržaj kolegija važan za vašu buduću karijeru?</p>
          <p>(1 – posve nevažan, 5 – veoma važan)</p>
        </div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question11"
              value="1"
              v-model="forma.jedanaesto"
            />
            <label class="checkboxtext" for="option1">1</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option2"
              name="question11"
              value="2"
              v-model="forma.jedanaesto"
            />
            <label class="checkboxtext" for="2">2</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option3"
              name="question11"
              value="3"
              v-model="forma.jedanaesto"
            />
            <label class="checkboxtext" for="3">3</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option4"
              name="question11"
              value="3"
              v-model="forma.jedanaesto"
            />
            <label class="checkboxtext" for="4">4</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option5"
              name="question11"
              value="5"
              v-model="forma.jedanaesto"
            />
            <label class="checkboxtext" for="5">5</label>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>*</h2>
          <p>Općenito sam zadovoljan/zadovoljna sadržajem kolegija.</p>
          <p>(1 – uopće se ne slažem, 5 – u potpunosti se slažem)</p>
        </div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question12"
              value="1"
              v-model="forma.dvanaesto"
            />
            <label class="checkboxtext" for="option1">1</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option2"
              name="question12"
              value="2"
              v-model="forma.dvanaesto"
            />
            <label class="checkboxtext" for="2">2</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option3"
              name="question12"
              value="3"
              v-model="forma.dvanaesto"
            />
            <label class="checkboxtext" for="3">3</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option4"
              name="question12"
              value="3"
              v-model="forma.dvanaesto"
            />
            <label class="checkboxtext" for="4">4</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option5"
              name="question12"
              value="5"
              v-model="forma.dvanaesto"
            />
            <label class="checkboxtext" for="5">5</label>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <h2>*</h2>
          <p>Je li nastavnik/nastavnica dostupan/dostupna za konzultacije?</p>
          <p>(1- posve nedostupan/nedostupna, 5 – uvijek dostupan/dostupna)</p>
        </div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="radio"
              id="option1"
              name="question13"
              value="1"
              v-model="forma.trinaesto"
            />
            <label class="checkboxtext" for="option1">1</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option2"
              name="question13"
              value="2"
              v-model="forma.trinaesto"
            />
            <label class="checkboxtext" for="2">2</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option3"
              name="question13"
              value="3"
              v-model="forma.trinaesto"
            />
            <label class="checkboxtext" for="3">3</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option4"
              name="question13"
              value="3"
              v-model="forma.trinaesto"
            />
            <label class="checkboxtext" for="4">4</label>
          </div>
          <div class="form-group">
            <input
              required
              type="radio"
              id="option5"
              name="question13"
              value="5"
              v-model="forma.trinaesto"
            />
            <label class="checkboxtext" for="5">5</label>
          </div>

          <div class="form-group">
            <input
              required
              type="radio"
              id="option6"
              name="question13"
              value="6"
              v-model="forma.trinaesto"
            />
            <label class="checkboxtext" for="6">ne znam (ne mogu procijeniti)</label>
          </div>
        </div>
      </div>
      <div class="card-table">
        <div class="card-header">
          <h2>*</h2>
          <p>Molimo da u nastavku označite u kojoj se mjeri slažete s tvrdnjama koje se odnose na nastavnika pri čemu 1 znači da se uopće ne slažete, a 5 da se u potpunosti slažete:</p>
        </div>
        <div class="card-body">
          <table width="100%">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">1</th>
                <th scope="col">2</th>
                <th scope="col">3</th>
                <th scope="col">4</th>
                <th scope="col">5</th>
                <th scope="col">ne znam(ne mogu procijeniti)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Redovito održava nastavu</td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question14"
                      value="1"
                      v-model="forma.cetrnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question14"
                      value="1"
                      v-model="forma.cetrnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question14"
                      value="1"
                      v-model="forma.cetrnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question14"
                      value="1"
                      v-model="forma.cetrnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question14"
                      value="1"
                      v-model="forma.cetrnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div required class="checkbox">
                    <input
                      type="radio"
                      id="option1"
                      name="question14"
                      value="1"
                      v-model="forma.cetrnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>
              </tr>
              <hr />
              <tr class="boja">
                <td>Odgovara na elektronsku poštu</td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question15"
                      value="1"
                      v-model="forma.petnaesto"
                    />
                    <label class="checkboxtext" for="option"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question15"
                      value="1"
                      v-model="forma.petnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question15"
                      value="1"
                      v-model="forma.petnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question15"
                      value="1"
                      v-model="forma.petnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question15"
                      value="1"
                      v-model="forma.petnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div class="checkbox">
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question15"
                      value="1"
                      v-model="forma.petnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>
              </tr>
              <hr />
              <tr>
                <td>Dobar je govornik</td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question16"
                      value="1"
                      v-model="forma.sesnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question16"
                      value="1"
                      v-model="forma.sesnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question16"
                      value="1"
                      v-model="forma.sesnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question16"
                      value="1"
                      v-model="forma.sesnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question16"
                      value="1"
                      v-model="forma.sesnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div class="checkbox">
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question16"
                      value="1"
                      v-model="forma.sesnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>
              </tr>
              <hr />
              <tr class="boja">
                <td>Predaje razumljivo</td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question17"
                      value="1"
                      v-model="forma.sedamnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question17"
                      value="1"
                      v-model="forma.sedamnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question17"
                      value="1"
                      v-model="forma.sedamnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question17"
                      value="1"
                      v-model="forma.sedamnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question17"
                      value="1"
                      v-model="forma.sedamnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div class="checkbox">
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question17"
                      value="1"
                      v-model="forma.sedamnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>
              </tr>
              <hr />
              <tr>
                <td>Predaje zanimljivo</td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question18"
                      value="1"
                      v-model="forma.osamnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question18"
                      value="1"
                      v-model="forma.osamnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question18"
                      value="1"
                      v-model="forma.osamnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question18"
                      value="1"
                      v-model="forma.osamnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question18"
                      value="1"
                      v-model="forma.osamnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div class="checkbox">
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question18"
                      value="1"
                      v-model="forma.osamnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>
              </tr>
              <hr />
              <tr class="boja">
                <td>Pravedan/pravedna je</td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question19"
                      value="1"
                      v-model="forma.devetnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question19"
                      value="1"
                      v-model="forma.devetnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question19"
                      value="1"
                      v-model="forma.devetnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question19"
                      value="1"
                      v-model="forma.devetnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question19"
                      value="1"
                      v-model="forma.devetnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div class="checkbox">
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question19"
                      value="1"
                      v-model="forma.devetnaesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>
              </tr>
              <hr />
              <tr>
                <td>Potiče studente na komunikaciju i postavljanje pitanja</td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question20"
                      value="1"
                      v-model="forma.dvadeseto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question20"
                      value="1"
                      v-model="forma.dvadeseto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question20"
                      value="1"
                      v-model="forma.dvadeseto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question20"
                      value="1"
                      v-model="forma.dvadeseto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question20"
                      value="1"
                      v-model="forma.dvadeseto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div class="checkbox">
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question20"
                      value="1"
                      v-model="forma.dvadeseto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>
              </tr>
              <hr />
              <tr class="boja">
                <td>Poštuje studente</td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question21"
                      value="1"
                      v-model="forma.dvadesetPrvo"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question21"
                      value="1"
                      v-model="forma.dvadesetPrvo"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question21"
                      value="1"
                      v-model="forma.dvadesetPrvo"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question21"
                      value="1"
                      v-model="forma.dvadesetPrvo"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question21"
                      value="1"
                      v-model="forma.dvadesetPrvo"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div class="checkbox">
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question21"
                      value="1"
                      v-model="forma.dvadesetPrvo"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>
              </tr>
              <hr />
              <tr>
                <td>Općenito motivira studente</td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question22"
                      value="1"
                      v-model="forma.dvadesetDrugo"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question22"
                      value="1"
                      v-model="forma.dvadesetDrugo"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question22"
                      value="1"
                      v-model="forma.dvadesetDrugo"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question22"
                      value="1"
                      v-model="forma.dvadesetDrugo"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question22"
                      value="1"
                      v-model="forma.dvadesetDrugo"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div class="checkbox">
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question22"
                      value="1"
                      v-model="forma.dvadesetDrugo"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>
              </tr>
              <hr />
              <tr class="boja">
                <td>Uvažava različita mišljenja</td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question23"
                      value="1"
                      v-model="forma.dvadesetTrece"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question23"
                      value="1"
                      v-model="forma.dvadesetTrece"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question23"
                      value="1"
                      v-model="forma.dvadesetTrece"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question23"
                      value="1"
                      v-model="forma.dvadesetTrece"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question23"
                      value="1"
                      v-model="forma.dvadesetTrece"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div class="checkbox">
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question23"
                      value="1"
                      v-model="forma.dvadesetTrece"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>
              </tr>
              <hr />
              <tr>
                <td>Kvalitetno organizira nastavu</td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question24"
                      value="1"
                      v-model="forma.dvadesetCetvrto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question24"
                      value="1"
                      v-model="forma.dvadesetCetvrto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question24"
                      value="1"
                      v-model="forma.dvadesetCetvrto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question24"
                      value="1"
                      v-model="forma.dvadesetCetvrto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question24"
                      value="1"
                      v-model="forma.dvadesetCetvrto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div class="checkbox">
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question24"
                      value="1"
                      v-model="forma.dvadesetCetvrto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>
              </tr>
              <hr />
              <tr class="boja">
                <td>Stručan/stručna je</td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question25"
                      value="1"
                      v-model="forma.dvadesetPeto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question25"
                      value="1"
                      v-model="forma.dvadesetPeto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question25"
                      value="1"
                      v-model="forma.dvadesetPeto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question25"
                      value="1"
                      v-model="forma.dvadesetPeto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question25"
                      value="1"
                      v-model="forma.dvadesetPeto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div class="checkbox">
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question25"
                      value="1"
                      v-model="forma.dvadesetPeto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>
              </tr>
              <hr />
              <tr>
                <td>Povezuje nastavno gradivo i praktične primjere</td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question26"
                      value="1"
                      v-model="forma.dvadesetSesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question26"
                      value="1"
                      v-model="forma.dvadesetSesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question26"
                      value="1"
                      v-model="forma.dvadesetSesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question26"
                      value="1"
                      v-model="forma.dvadesetSesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question26"
                      value="1"
                      v-model="forma.dvadesetSesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div class="checkbox">
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question26"
                      value="1"
                      v-model="forma.dvadesetSesto"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>
              </tr>
              <hr />
              <tr class="boja">
                <td>Općenito je kvalitetan nastavnik/nastavnica</td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question27"
                      value="1"
                      v-model="forma.dvadesetSedmo"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question27"
                      value="1"
                      v-model="forma.dvadesetSedmo"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question27"
                      value="1"
                      v-model="forma.dvadesetSedmo"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question27"
                      value="1"
                      v-model="forma.dvadesetSedmo"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div>
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question27"
                      value="1"
                      v-model="forma.dvadesetSedmo"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>

                <td>
                  <div class="checkbox">
                    <input
                      required
                      type="radio"
                      id="option1"
                      name="question27"
                      value="1"
                      v-model="forma.dvadesetSedmo"
                    />
                    <label class="checkboxtext" for="option1"></label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="card-comment">
        <tr>
          <div class="card-header">
            <p>Ovdje možete unijeti komentar, primjedbu ili pohvalu nastavnice/nastavnika, odnosno gdje vidite mogućnosti poboljšanja – ukratko obrazložite.</p>
          </div>
        </tr>

        <tr>
          <td>
            <div>
              <textarea class="komentar" rows="5" v-model="forma.komentar"></textarea>
            </div>
          </td>
        </tr>
      </div>
      <div class="card-button">
        <button class="btn btn-primary btn-lg" type="submit">Pošalji</button>
      </div>
    </form>
  </div>
</template>
<script>
import { anketa } from "@/services";
import regeneratorRuntime from "regenerator-runtime";

export default {
  data() {
    return {
      prof_id: this.$route.params.id,
      forma: {
        prvo: "",
        drugo: "",
        trece: "",
        cetvrto: "",
        peto: "",
        sesto: "",
        sedmo: "",
        osmo: "",
        deveto: "",
        deseto: "",
        jedanaesto: "",
        dvanaesto: "",
        trinaesto: "",
        cetrnaesto: "",
        petnaesto: "",
        sesnaesto: "",
        sedamnaesto: "",
        osamnaesto: "",
        devetnaesto: "",
        dvadeseto: "",
        dvadesetPrvo: "",
        dvadesetDrugo: "",
        dvadesetTrece: "",
        dvadesetCetvrto: "",
        dvadesetPeto: "",
        dvadesetSesto: "",
        dvadesetSedmo: "",
        komentar: ""
      }
    };
  },
  methods: {
    async form() {
      let save = await anketa.create(this.prof_id, this.forma);
      if (save.message == "success.") {
        this.$router.push("/popis");
      }
    }
  }
};
</script>
<style  scoped>
.komentar {
  margin-top: 5%;
  margin-bottom: 5%;
  width: 95%;
  text-indent: 5px;
  font-size: 15px;
}
.card-comment {
  margin: 0px auto 10px;
  width: 70%;
  background-color: rgb(228, 227, 227);
  color: black;
  margin-top: 5%;
}
.card-table {
  margin: 0px auto 10px;
  width: 70%;
  background-color: rgb(228, 227, 227);
  color: black;
  margin-top: 5%;
}
.card {
  margin: 0px auto 10px;
  width: 55%;
  background-color: rgb(228, 227, 227);
  color: black;
  margin-top: 5%;
}
input[type="radio"] {
  transform: scale(1.75);
  cursor: pointer;
}

.checkboxtext {
  font-size: 120%;
  margin-left: 5%;
}
.form-group {
  margin-left: 15%;
}

th {
  padding-left: 5%;
}

td {
  width: 2%;
  padding-left: 5%;
}

.btn {
  margin-bottom: 15%;
  width: 180px;
  height: 60px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #00b7ff;
  outline: none;
  transition: 0.3s ease-in-out;
  color: white;
  margin-top: 5%;
}
.btn:hover {
  transition: 0.3s ease-in-out;
  background: #4169e1;
  color: white;
}
.card-button {
  display: flex;
  justify-content: center;
}
</style>
