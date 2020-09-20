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
              v-model="forma[0]"
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
              v-model="forma[0]"
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
              v-model="forma[0]"
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
              v-model="forma[0]"
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
              v-model="forma[0]"
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
              v-model="forma[1]"
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
              v-model="forma[1]"
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
              v-model="forma[1]"
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
              v-model="forma[1]"
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
              v-model="forma[2]"
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
              v-model="forma[2]"
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
              v-model="forma[2]"
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
              v-model="forma[2]"
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
              v-model="forma[2]"
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
              v-model="forma[3]"
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
              v-model="forma[3]"
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
              v-model="forma[3]"
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
              v-model="forma[3]"
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
              v-model="forma[3]"
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
              v-model="forma[4]"
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
              v-model="forma[4]"
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
              v-model="forma[4]"
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
              v-model="forma[4]"
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
              v-model="forma[4]"
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
              v-model="forma[5]"
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
              v-model="forma[5]"
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
              v-model="forma[5]"
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
              v-model="forma[6]"
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
              v-model="forma[6]"
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
              v-model="forma[6]"
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
              v-model="forma[6]"
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
              v-model="forma[6]"
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
              v-model="forma[7]"
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
              v-model="forma[7]"
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
              v-model="forma[7]"
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
              v-model="forma[7]"
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
              v-model="forma[7]"
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
              v-model="forma[8]"
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
              v-model="forma[8]"
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
              v-model="forma[8]"
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
              v-model="forma[8]"
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
              v-model="forma[8]"
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
              v-model="forma[9]"
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
              v-model="forma[9]"
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
              v-model="forma[9]"
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
              v-model="forma[9]"
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
              v-model="forma[9]"
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
              v-model="forma[10]"
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
              v-model="forma[10]"
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
              v-model="forma[10]"
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
              v-model="forma[10]"
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
              v-model="forma[10]"
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
              v-model="forma[11]"
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
              v-model="forma[11]"
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
              v-model="forma[11]"
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
              v-model="forma[11]"
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
              v-model="forma[11]"
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
              v-model="forma[12]"
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
              v-model="forma[12]"
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
              v-model="forma[12]"
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
              v-model="forma[12]"
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
              v-model="forma[12]"
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
              v-model="forma[12]"
            />
            <label class="checkboxtext" for="6">ne znam (ne mogu procijeniti)</label>
          </div>
        </div>
      </div>
      <hr />
      <h4
        class="molimo"
      >Molimo da u nastavku označite u kojoj se mjeri slažete s tvrdnjama koje se odnose na nastavnika pri čemu 1 znači da se uopće ne slažete, a 5 da se u potpunosti slažete:</h4>

      <hr />
      <div class="card grupiranje">
        <div class="card">
          <div class="card-header">
            <h2>*</h2>
            <p>Redovito održava nastavu</p>
          </div>
          <div class="card-body">
            <div class="form-group">
              <input
                required
                type="radio"
                id="option1"
                name="question14"
                value="1"
                v-model="forma[13]"
              />
              <label class="checkboxtext" for="option1">1</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option2"
                name="question14"
                value="2"
                v-model="forma[13]"
              />
              <label class="checkboxtext" for="2">2</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option3"
                name="question14"
                value="3"
                v-model="forma[13]"
              />
              <label class="checkboxtext" for="3">3</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option4"
                name="question14"
                value="3"
                v-model="forma[13]"
              />
              <label class="checkboxtext" for="4">4</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option5"
                name="question14"
                value="5"
                v-model="forma[13]"
              />
              <label class="checkboxtext" for="5">5</label>
            </div>

            <div class="form-group">
              <input required type="radio" id="option6" name="question14" value="6" />
              <label class="checkboxtext" for="6">ne znam (ne mogu procijeniti)</label>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2>*</h2>
            <p>Odgovara na elektronsku poštu</p>
          </div>
          <div class="card-body">
            <div class="form-group">
              <input
                required
                type="radio"
                id="option1"
                name="question15"
                value="1"
                v-model="forma[14]"
              />
              <label class="checkboxtext" for="option1">1</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option2"
                name="question15"
                value="2"
                v-model="forma[14]"
              />
              <label class="checkboxtext" for="2">2</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option3"
                name="question15"
                value="3"
                v-model="forma[14]"
              />
              <label class="checkboxtext" for="3">3</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option4"
                name="question15"
                value="3"
                v-model="forma[14]"
              />
              <label class="checkboxtext" for="4">4</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option5"
                name="question15"
                value="5"
                v-model="forma[14]"
              />
              <label class="checkboxtext" for="5">5</label>
            </div>

            <div class="form-group">
              <input
                required
                type="radio"
                id="option6"
                name="question15"
                value="6"
                v-model="forma[14]"
              />
              <label class="checkboxtext" for="6">ne znam (ne mogu procijeniti)</label>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2>*</h2>
            <p>Dobar je govornik</p>
          </div>
          <div class="card-body">
            <div class="form-group">
              <input
                required
                type="radio"
                id="option1"
                name="question16"
                value="1"
                v-model="forma[15]"
              />
              <label class="checkboxtext" for="option1">1</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option2"
                name="question16"
                value="2"
                v-model="forma[15]"
              />
              <label class="checkboxtext" for="2">2</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option3"
                name="question16"
                value="3"
                v-model="forma[15]"
              />
              <label class="checkboxtext" for="3">3</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option4"
                name="question16"
                value="3"
                v-model="forma[15]"
              />
              <label class="checkboxtext" for="4">4</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option5"
                name="question16"
                value="5"
                v-model="forma[15]"
              />
              <label class="checkboxtext" for="5">5</label>
            </div>

            <div class="form-group">
              <input
                required
                type="radio"
                id="option6"
                name="question16"
                value="6"
                v-model="forma[15]"
              />
              <label class="checkboxtext" for="6">ne znam (ne mogu procijeniti)</label>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2>*</h2>
            <p>Predaje zanimljivo</p>
          </div>
          <div class="card-body">
            <div class="form-group">
              <input
                required
                type="radio"
                id="option1"
                name="question17"
                value="1"
                v-model="forma[16]"
              />
              <label class="checkboxtext" for="option1">1</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option2"
                name="question17"
                value="2"
                v-model="forma[16]"
              />
              <label class="checkboxtext" for="2">2</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option3"
                name="question17"
                value="3"
                v-model="forma[16]"
              />
              <label class="checkboxtext" for="3">3</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option4"
                name="question17"
                value="3"
                v-model="forma[16]"
              />
              <label class="checkboxtext" for="4">4</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option5"
                name="question17"
                value="5"
                v-model="forma[16]"
              />
              <label class="checkboxtext" for="5">5</label>
            </div>

            <div class="form-group">
              <input
                required
                type="radio"
                id="option6"
                name="question17"
                value="6"
                v-model="forma[16]"
              />
              <label class="checkboxtext" for="6">ne znam (ne mogu procijeniti)</label>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2>*</h2>
            <p>Pravedan/pravedna je</p>
          </div>
          <div class="card-body">
            <div class="form-group">
              <input
                required
                type="radio"
                id="option1"
                name="question18"
                value="1"
                v-model="forma[17]"
              />
              <label class="checkboxtext" for="option1">1</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option2"
                name="question18"
                value="2"
                v-model="forma[17]"
              />
              <label class="checkboxtext" for="2">2</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option3"
                name="question18"
                value="3"
                v-model="forma[17]"
              />
              <label class="checkboxtext" for="3">3</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option4"
                name="question18"
                value="3"
                v-model="forma[17]"
              />
              <label class="checkboxtext" for="4">4</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option5"
                name="question18"
                value="5"
                v-model="forma[17]"
              />
              <label class="checkboxtext" for="5">5</label>
            </div>

            <div class="form-group">
              <input
                required
                type="radio"
                id="option6"
                name="question18"
                value="6"
                v-model="forma[17]"
              />
              <label class="checkboxtext" for="6">ne znam (ne mogu procijeniti)</label>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2>*</h2>
            <p>Potiče studente na komunikaciju i postavljanje pitanja</p>
          </div>
          <div class="card-body">
            <div class="form-group">
              <input
                required
                type="radio"
                id="option1"
                name="question19"
                value="1"
                v-model="forma[18]"
              />
              <label class="checkboxtext" for="option1">1</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option2"
                name="question19"
                value="2"
                v-model="forma[18]"
              />
              <label class="checkboxtext" for="2">2</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option3"
                name="question19"
                value="3"
                v-model="forma[18]"
              />
              <label class="checkboxtext" for="3">3</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option4"
                name="question19"
                value="3"
                v-model="forma[18]"
              />
              <label class="checkboxtext" for="4">4</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option5"
                name="question19"
                value="5"
                v-model="forma[18]"
              />
              <label class="checkboxtext" for="5">5</label>
            </div>

            <div class="form-group">
              <input
                required
                type="radio"
                id="option6"
                name="question19"
                value="6"
                v-model="forma[18]"
              />
              <label class="checkboxtext" for="6">ne znam (ne mogu procijeniti)</label>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2>*</h2>
            <p>Poštuje studente</p>
          </div>
          <div class="card-body">
            <div class="form-group">
              <input
                required
                type="radio"
                id="option1"
                name="question20"
                value="1"
                v-model="forma[19]"
              />
              <label class="checkboxtext" for="option1">1</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option2"
                name="question20"
                value="2"
                v-model="forma[19]"
              />
              <label class="checkboxtext" for="2">2</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option3"
                name="question20"
                value="3"
                v-model="forma[19]"
              />
              <label class="checkboxtext" for="3">3</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option4"
                name="question20"
                value="3"
                v-model="forma[19]"
              />
              <label class="checkboxtext" for="4">4</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option5"
                name="question20"
                value="5"
                v-model="forma[19]"
              />
              <label class="checkboxtext" for="5">5</label>
            </div>

            <div class="form-group">
              <input
                required
                type="radio"
                id="option6"
                name="question20"
                value="6"
                v-model="forma[19]"
              />
              <label class="checkboxtext" for="6">ne znam (ne mogu procijeniti)</label>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2>*</h2>
            <p>Općenito motivira studente</p>
          </div>
          <div class="card-body">
            <div class="form-group">
              <input
                required
                type="radio"
                id="option1"
                name="question21"
                value="1"
                v-model="forma[20]"
              />
              <label class="checkboxtext" for="option1">1</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option2"
                name="question21"
                value="2"
                v-model="forma[20]"
              />
              <label class="checkboxtext" for="2">2</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option3"
                name="question21"
                value="3"
                v-model="forma[20]"
              />
              <label class="checkboxtext" for="3">3</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option4"
                name="question21"
                value="3"
                v-model="forma[20]"
              />
              <label class="checkboxtext" for="4">4</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option5"
                name="question21"
                value="5"
                v-model="forma[20]"
              />
              <label class="checkboxtext" for="5">5</label>
            </div>

            <div class="form-group">
              <input
                required
                type="radio"
                id="option6"
                name="question21"
                value="6"
                v-model="forma[20]"
              />
              <label class="checkboxtext" for="6">ne znam (ne mogu procijeniti)</label>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2>*</h2>
            <p>Uvažava različita mišljenja</p>
          </div>
          <div class="card-body">
            <div class="form-group">
              <input
                required
                type="radio"
                id="option1"
                name="question22"
                value="1"
                v-model="forma[21]"
              />
              <label class="checkboxtext" for="option1">1</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option2"
                name="question22"
                value="2"
                v-model="forma[21]"
              />
              <label class="checkboxtext" for="2">2</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option3"
                name="question22"
                value="3"
                v-model="forma[21]"
              />
              <label class="checkboxtext" for="3">3</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option4"
                name="question22"
                value="3"
                v-model="forma[21]"
              />
              <label class="checkboxtext" for="4">4</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option5"
                name="question22"
                value="5"
                v-model="forma[21]"
              />
              <label class="checkboxtext" for="5">5</label>
            </div>

            <div class="form-group">
              <input
                required
                type="radio"
                id="option6"
                name="question22"
                value="6"
                v-model="forma[21]"
              />
              <label class="checkboxtext" for="6">ne znam (ne mogu procijeniti)</label>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2>*</h2>
            <p>Kvalitetno organizira nastavu</p>
          </div>
          <div class="card-body">
            <div class="form-group">
              <input
                required
                type="radio"
                id="option1"
                name="question23"
                value="1"
                v-model="forma[22]"
              />
              <label class="checkboxtext" for="option1">1</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option2"
                name="question23"
                value="2"
                v-model="forma[22]"
              />
              <label class="checkboxtext" for="2">2</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option3"
                name="question23"
                value="3"
                v-model="forma[22]"
              />
              <label class="checkboxtext" for="3">3</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option4"
                name="question23"
                value="3"
                v-model="forma[22]"
              />
              <label class="checkboxtext" for="4">4</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option5"
                name="question23"
                value="5"
                v-model="forma[22]"
              />
              <label class="checkboxtext" for="5">5</label>
            </div>

            <div class="form-group">
              <input
                required
                type="radio"
                id="option6"
                name="question23"
                value="6"
                v-model="forma[22]"
              />
              <label class="checkboxtext" for="6">ne znam (ne mogu procijeniti)</label>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2>*</h2>
            <p>Stručan/stručna je</p>
          </div>
          <div class="card-body">
            <div class="form-group">
              <input
                required
                type="radio"
                id="option1"
                name="question24"
                value="1"
                v-model="forma[23]"
              />
              <label class="checkboxtext" for="option1">1</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option2"
                name="question24"
                value="2"
                v-model="forma[23]"
              />
              <label class="checkboxtext" for="2">2</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option3"
                name="question24"
                value="3"
                v-model="forma[23]"
              />
              <label class="checkboxtext" for="3">3</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option4"
                name="question24"
                value="3"
                v-model="forma[23]"
              />
              <label class="checkboxtext" for="4">4</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option5"
                name="question24"
                value="5"
                v-model="forma[23]"
              />
              <label class="checkboxtext" for="5">5</label>
            </div>

            <div class="form-group">
              <input
                required
                type="radio"
                id="option6"
                name="question24"
                value="6"
                v-model="forma[23]"
              />
              <label class="checkboxtext" for="6">ne znam (ne mogu procijeniti)</label>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2>*</h2>
            <p>Povezuje nastavno gradivo i praktične primjere</p>
          </div>
          <div class="card-body">
            <div class="form-group">
              <input
                required
                type="radio"
                id="option1"
                name="question25"
                value="1"
                v-model="forma[24]"
              />
              <label class="checkboxtext" for="option1">1</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option2"
                name="question25"
                value="2"
                v-model="forma[24]"
              />
              <label class="checkboxtext" for="2">2</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option3"
                name="question25"
                value="3"
                v-model="forma[24]"
              />
              <label class="checkboxtext" for="3">3</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option4"
                name="question25"
                value="3"
                v-model="forma[24]"
              />
              <label class="checkboxtext" for="4">4</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option5"
                name="question25"
                value="5"
                v-model="forma[24]"
              />
              <label class="checkboxtext" for="5">5</label>
            </div>

            <div class="form-group">
              <input
                required
                type="radio"
                id="option6"
                name="question25"
                value="6"
                v-model="forma[24]"
              />
              <label class="checkboxtext" for="6">ne znam (ne mogu procijeniti)</label>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2>*</h2>
            <p>Općenito je kvalitetan nastavnik/nastavnica</p>
          </div>
          <div class="card-body">
            <div class="form-group">
              <input
                required
                type="radio"
                id="option1"
                name="question26"
                value="1"
                v-model="forma[25]"
              />
              <label class="checkboxtext" for="option1">1</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option2"
                name="question26"
                value="2"
                v-model="forma[25]"
              />
              <label class="checkboxtext" for="2">2</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option3"
                name="question26"
                value="3"
                v-model="forma[25]"
              />
              <label class="checkboxtext" for="3">3</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option4"
                name="question26"
                value="3"
                v-model="forma[25]"
              />
              <label class="checkboxtext" for="4">4</label>
            </div>
            <div class="form-group">
              <input
                required
                type="radio"
                id="option5"
                name="question26"
                value="5"
                v-model="forma[25]"
              />
              <label class="checkboxtext" for="5">5</label>
            </div>

            <div class="form-group">
              <input
                required
                type="radio"
                id="option6"
                name="question26"
                value="6"
                v-model="forma[25]"
              />
              <label class="checkboxtext" for="6">ne znam (ne mogu procijeniti)</label>
            </div>
          </div>
        </div>
      </div>
      <h2 class="komentar-naslov">Komentar:</h2>
      <div class="card comment">
        <textarea name="komentar" cols="30" rows="8" v-model="forma[26]"></textarea>
      </div>

      <div class="card-button">
        <button class="btn btn-primary btn-lg" type="submit">Pošalji</button>
      </div>
    </form>
  </div>
</template>
<script>
import { anketa, auth } from "@/services";
import regeneratorRuntime from "regenerator-runtime";

export default {
  data() {
    return {
      prof_id: this.$route.params.id,
      forma: []
    };
  },
  methods: {
    async form() {
      const user = await auth.getUser();
      this.forma = {...this.forma, userEmail: user.email}
      const save = await anketa.create(this.prof_id, this.forma);
      if (save.message == "success.") {
        this.$router.push("/popis");
      }
    },
  },
};
</script>
<style  scoped>
.card {
  margin: 0px auto 10px;
  width: 55%;
  background-color: rgb(228, 227, 227);
  color: black;
  margin-top: 5%;
}
.grupiranje {
  background-color: #01408325;
}
input[type="radio"] {
  transform: scale(1.75);
  cursor: pointer;
}
.molimo {
  color: white;
  text-align: center;
}
.checkboxtext {
  font-size: 120%;
  margin-left: 5%;
}
.form-group {
  margin-left: 15%;
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
.comment {
  width: 60%;
  text-indent: 5px;
  margin-bottom: 10%;
}
.komentar-naslov {
  color: white;
  margin-left: 10%;
}
@media (max-width: 1326px) {
  .grupiranje2 {
    width: 95%;
  }
}
@media (max-width: 767px) {
  .card {
    width: 80%;
  }
  .grupiranje {
    width: 100%;
    font-size: 13px;
  }
  .grupiranje2 {
    width: 95%;
  }
}
</style>
