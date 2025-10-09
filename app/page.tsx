import { AISummarizer } from "../components/ai-summarizer"

export default function Page() {
  return (
    <>
        <div className="cv-container">

          <div className="cv-header">
              <div className="cv-foto-profil"><img src="foto-profil.jpg" alt="foto-profil"></img></div>
              <div className="cv-header-info">
                  <h1>Mahdi Ghani Afriza</h1>
                  <div className="cv-kontak-info">
                      <div className="cv-kontak">
                          <a href="mailto:ramaghani0513@gmail.com">ramaghani0513@gmail.com</a>
                      </div>
                      <div className="cv-kontak">
                          <a href="https://www.linkedin.com/in/mahdi-ghani-afriza">linkedin.com/in/mahdi-ghani-afriza</a>
                      </div>
                      <div className="cv-kontak">
                          <span>+62 851-5869-0509</span>
                      </div>
                      <div className="cv-kontak">
                          <span>Gresik, Jawa Timur, Indonesia</span>
                      </div>
                  </div>
              </div>
          </div>

          <div className="cv-section">
              <h2>Tentang Saya</h2>
              <p>Saya Mahdi Ghani Afriza, mahasiswa Teknik Informatika semester 3 di Universitas Negeri Surabaya. Saya memiliki ketertarikan besar di pengembangan web frontend dan UI/UX design. Selain itu saya sangat antusias dalam bidang desain kreatif.</p>
          </div>

          <div className="cv-section">
              <h2>Pendidikan</h2>
              <div className="cv-timeline">
                  <div className="cv-isi-timeline">
                      <div className="cv-judul-timeline">
                          <h3>Universitas Negeri Surabaya</h3>
                          <span className="cv-tgl-timeline">2024-Sekarang</span>
                      </div>
                      <p className="cv-subteks-timeline">S1 Teknik Informatika</p>
                      <ul className="cv-timeline-list">
                          <li>Projek: Membuat Aplikasi Web Full-stack Pemesanan Tiket Bioskop</li>
                          <li>Projek: Membuat Desain UI/UX Pemesanan Tiket Masuk Gunung</li>
                      </ul>
                  </div>
              </div>
              
              <div className="cv-timeline">
                  <div className="cv-isi-timeline">
                      <div className="cv-judul-timeline">
                          <h3>SMK Negeri 1 Cerme Gresik</h3>
                          <span className="cv-tgl-timeline">2021-2024</span>
                      </div>
                      <p className="cv-subteks-timeline">Desain Komunikasi Visual</p>
                      <ul className="cv-timeline-list">
                          <li>Wisudawan Terbaik 1 Jurusan DKV</li>
                          <li>Projek: Mempromosikan Wisata Lokal dengan berbagai Media Kreatif</li>
                          <li>Aktivitas: Tim Jurnalistik SMK N 1 Cerme</li>
                      </ul>
                  </div>
              </div>
          </div>

          <div className="cv-section">
              <h2>Pengalaman</h2>
              <div className="cv-timeline">
                  <div className="cv-isi-timeline">
                      <div className="cv-judul-timeline">
                          <h3>PT Varia Usaha Fabrikasi</h3>
                          <span className="cv-tgl-timeline">Apr 2023-Des 2023</span>
                      </div>
                      <p className="cv-subteks-timeline">Graphic Designer</p>
                      <ul className="cv-timeline-list">
                          <li>Mengelola branding serta identitas perusahaan</li>
                          <li>Meningkatkan presentasi profil perusahaan, digunakan pada lebih dari 10 proposal klien</li>
                          <li>Mendesain konten digital dan meningkatkan kehadiran website & media sosial</li>
                          <li>Mendokumentasikan acara dan membuat aset visual untuk kebutuhan perusahaan</li>
                      </ul>
                  </div>
              </div>
          </div>

          <div className="cv-section">
              <h2>Organisasi</h2>
              <div className="cv-timeline">
                  <div className="cv-isi-timeline">
                      <div className="cv-judul-timeline">
                          <h3>Himpunan Mahasiswa Prodi Teknik Informatika</h3>
                          <span className="cv-tgl-timeline">Feb 2025-Sekarang</span>
                      </div>
                      <p className="cv-subteks-timeline">Staff Kominfo</p>
                      <ul className="cv-timeline-list">
                          <li>Memproduksi materi promosi digital untuk meningkatkan engagement</li>
                          <li>Mengelola akun media sosial dan berinteraksi dengan audiens</li>
                      </ul>
                  </div>
              </div>
              
              <div className="cv-timeline">
                  <div className="cv-isi-timeline">
                      <div className="cv-judul-timeline">
                          <h3>LPM Digitivs</h3>
                          <span className="cv-tgl-timeline">Mar 2025-Sekarang</span>
                      </div>
                      <p className="cv-subteks-timeline">Sekretaris & Bendahara</p>
                      <ul className="cv-timeline-list">
                          <li>Mengelola administrasi dan catatan keuangan organisasi</li>
                          <li>Koordinasi acara dan kegiatan untuk organisasi</li>
                      </ul>
                  </div>
              </div>
          </div>

          <div className="cv-section">
              <h2>Pelatihan Skill</h2>
              <div className="cv-timeline">
                  <ul className="cv-timeline-list">
                      <li>Samsung Innovation Campus Batch 7 - Dibimbing (Ags 2025-Sekarang)</li>
                      <li>Digital Skill Fair 42: Front End Web - Dibimbing (Ags 2025)</li>
                      <li>Front-end Web Development - Fast Campus (Jul 2025-Sekarang)</li>
                      <li>Advanced React - Meta (Jul 2025)</li>
                      <li>React Basics - Meta (Jul 2025)</li>
                      <li>Programming with JavaScript - Meta (Jul 2025)</li>
                  </ul>
              </div>
          </div>
          

          <div className="cv-section">
              <h2>Skill</h2>
              <div className="cv-timeline">
                  <ul className="cv-timeline-list">
                      <li>Graphic Design</li>
                      <li>UI/UX Design</li>
                      <li>Front-end Web</li>
                      <li>Product Design</li>
                      <li>Digital Marketing</li>
                  </ul>
              </div>
          </div>
      </div>

      <section className="cv-ai">
        <h2>Ringkas CV Secara Otomatis</h2>
        <p>Tekan tombol di bawah untuk menghasilkan ringkasan singkat CV ini.</p>
        <AISummarizer targetSelector=".cv-container" />
        <p className="cv-note">Catatan: ringkasan AI dapat mengandung kekeliruan.</p>
      </section>
    </>
  )
}
