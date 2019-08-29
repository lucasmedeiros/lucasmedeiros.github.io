<template>
  <div class="skill">
    <div class="panel">
      <input id="collapsible-frameworks" class="toggle" type="checkbox" />
      <label for="collapsible-frameworks" class="lbl-toggle">
        <font-awesome-icon :icon="['fas', 'graduation-cap']"/>
        Education
      </label>
      <div class="collapsible-content">
        <div class="content-inner">
          <ul>
            <li>
              <dl>
                <dt>Federal University of Campina Grande | UFCG</dt>
                <dd>Undergraduate student in Bachelor of Computer Science. 2017 - Current.</dd>
              </dl>
            </li>

            <li>
              <dl>
                <dt>Federal Institute of Education, Science and Technology of Rio Grande do Norte | IFRN</dt>
                <dd>High School integraded with Computer Technician Course. 2013 - 2016.</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="panel">
      <input id="collapsible-languages" class="toggle" type="checkbox" />
      <label for="collapsible-languages" class="lbl-toggle">
        <font-awesome-icon :icon="['fas', 'code']"/>
        Programming Languages
      </label>
      <div class="collapsible-content">
        <div class="content-inner">
          <ul>
            <li>
              <dl>
                <dt>JavaScript</dt>
              </dl>
            </li>

            <li>
              <dl>
                <dt>Java</dt>
              </dl>
            </li>

            <li>
              <dl>
                <dt>Python</dt>
              </dl>
            </li>

            <li>
              <dl>
                <dt>PHP</dt>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="panel">
      <input id="collapsible" class="toggle" type="checkbox" />
      <label for="collapsible" class="lbl-toggle">
        <font-awesome-icon :icon="['fas', 'project-diagram']"/>
        Frameworks / Technologies
      </label>
      <div class="collapsible-content">
        <div class="content-inner">
          <ul>
            <li>
              <dl>
                <dt>React</dt>
              </dl>
            </li>
            
            <li>
              <dl>
                <dt>Vue</dt>
              </dl>
            </li>

            <li>
              <dl>
                <dt>Node</dt>
              </dl>
            </li>

            <li>
              <dl>
                <dt>SpringBoot</dt>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutSkills'
}
</script>

<style scoped>
.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.panel {
  margin: 1vh;
  width: 100%;
}

input[type='checkbox'] {
  display: none;
}

.lbl-toggle {
  display: block;

  font-weight: bold;
  font-family: monospace;
  text-transform: uppercase;
  text-align: center;

  padding: .5rem;

  color: #ccc;
  background: rgb(20, 20, 20);

  cursor: pointer;

  border-radius: 7px;
  transition: all 0.25s ease-out;
}

.lbl-toggle:hover {
  color: white;
}

.lbl-toggle::before {
  content: ' ';
  display: inline-block;

  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid currentColor;
  vertical-align: middle;
  margin-right: .7rem;
  transform: translateY(-2px);

  transition: transform .2s ease-out;
}

.toggle:checked + .lbl-toggle::before {
  transform: rotate(90deg) translateX(-3px);
}

.collapsible-content {
  color: white;
  max-height: 0px;
  overflow: hidden;
  transition: max-height .25s ease-in-out;
}

.toggle:checked + .lbl-toggle + .collapsible-content {
  max-height: 650px;
}

.toggle:checked + .lbl-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.content-inner {
  background: rgb(60, 60, 60);
  border-bottom: 1px solid rgba(20, 20, 20, 0.4);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  padding: .5rem;
  height: auto;
}

li {
  margin-bottom: 10px;
}

dt {
  font-weight: bold;
}

dd {
  font-style: italic;
}
</style>
