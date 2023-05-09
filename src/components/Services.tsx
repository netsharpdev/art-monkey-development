import * as React from "react";

const Services = () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <h2 className="text-center mt-0">KOMPLEKSOWE PROJEKTY WNĘTRZ</h2>
        <hr className="divider my-4" />
        <p className="text-muted text-center mb-0">
          Nasza współpraca podzielona jest na kilka etapów, które są niezbędne
          do tego, abyśmy osiągneli wspólny cel, jakim jest projekt pięknego i
          funkcjonalnego mieszkania. Na każdym etapie jesteśmy w stałym
          kontakcie, tak abyś miał(a) ciągły dostęp do informacji na temat
          bieżących spraw i postępów w pracy nad projektem.
        </p>
        <hr className="divider my-4" />
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="img/about/1.jpg"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h2 className="h4 mb-2 text-primary">ETAP 1</h2>
                    <h3 className="h5 mb-2">Pierwsze spotkanie</h3>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted mb-0">
                      Poznajemy się, rozmawiamy, określamy warunki współpracy.
                      Opowiadasz mi o swoim wymarzonym mieszkaniu/domu, o swojej
                      codzienności i pasjach, ulubionych kolorach i sposobach na
                      spędzanie wolnego czasu. Ja dopytuję, słucham,
                      skrupulatnie notuję. Twój dom, to część Ciebie, Twoja
                      historia.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="img/about/2.jpg"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h2 className="h4 mb-2 text-primary">ETAP 2</h2>
                    <h3 className="h5 mb-2">Inwentaryzacja</h3>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted mb-0">
                      Przyjeżdżam na miejsce inwestycji i dokonuję dokładnych
                      pomiarów ścian, istniejących przyłączy elektrycznych,
                      wodno-kanalizacyjnych, oraz pozostałych istotnych
                      elementów, a także wykonuję dokumentację fotograficzną,
                      żeby nic nas nie zaskoczyło na etapie projektowania i
                      wykończenia. W przypadku braku możliwości przeprowadzenia
                      inwentaryzacji (np. dom w trakcie budowy) opieram się na
                      dostarczonej przez Ciebie dokumentacji.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="../images/about/3.jpg"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h2 className="h4 mb-2 text-primary">ETAP 3</h2>
                    <h3 className="h5 mb-2">Wstępna aranżacja</h3>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted mb-0">
                      Po uzyskaniu wszelkich niezbędnych informacji przystępuję
                      do przygotowania układów funkcjonalnych i moodboardów
                      (Prezentacja zestawienia wybranych mebli, dekoracji,
                      kolorów, która na celu przybliżenie mojego pomysłu i
                      klimatu projektowanego mieszkania). W zależności od
                      możliwości aranżacyjnych mieszkania, mogę przygotować
                      kilka wariantów, z których wspólnie wybierzemy ten, który
                      najlepiej odpowiada Twojemu gustowi i stylowi życia.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="img/about/4.jpg"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h2 className="h4 mb-2 text-primary">ETAP 4</h2>
                    <h3 className="h5 mb-2">Wizualizacje</h3>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted mb-0">
                      Po zaakceptowaniu przez Ciebie optymalnego układu
                      funkcjonalnego i moodboardu, buduję model 3D projektowanej
                      przestrzeni i tworzę wizualizacje, na których staram się
                      jak najwierniej oddać użyte kolory i materiały, co pozwala
                      na dokładne przedstawienie projektowanej przestrzeni i
                      wyobrażenie efektu końcowego.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="img/about/5.jpg"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h2 className="h4 mb-2 text-primary">ETAP 5</h2>
                    <h3 className="h5 mb-2">Projekt wykonawczy</h3>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted mb-0">
                      Po akceptacji wizualizacji sporządzam projekt wykonawczy,
                      który zawiera:
                      <ul className="text-muted text-left">
                        <li>Rzut mieszkania.</li>
                        <li>Rzut sufitów.</li>
                        <li>Rzut z oznaczeniem malowania ścian.</li>
                        <li>
                          Rzuty z rozmieszczeniem przyłączy elektrycznych oraz
                          wod-kan.
                        </li>
                        <li>Widoki ścian.</li>
                        <li>Rozrysy płytek.</li>
                        <li>Rysunki mebli na wymiar.</li>
                        <li>
                          Zestawienie materiałów i mebli, dekoracji i innych
                          elementów użytych w projekcie.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="img/about/6.jpg"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h2 className="h4 mb-2 text-primary">ETAP 6</h2>
                    <h3 className="h5 mb-2">Nadzór autorski</h3>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted mb-0">
                      Na Twoje życzenie prowadzę nadzór autorski nad
                      wykończeniem mieszkania. Jestem w stałym kontakcie z
                      wykonawcami, na początku omawiam z nimi projekt, a podczas
                      wizyt na budowie sprawdzam zgodność wykonawstwa z
                      projektem, wspólnie rozwiązujemy zaistniałe problemy.
                      Wszystko po to, abyś Ty spał(a) spokojnie!
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
