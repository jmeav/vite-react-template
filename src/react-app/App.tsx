import logoSinFondo from "../images/logo_sinfondo.png";
import "./App.css";

function App() {

	return (
		<div className="app-container">
			<div className="geometric-shapes">
				<div className="shape shape-1"></div>
				<div className="shape shape-2"></div>
				<div className="shape shape-3"></div>
			</div>

			<div className="content">
				<div className="logo-wrapper">
					<img src={logoSinFondo} alt="Credi Jireh" className="logo" />
					<div className="logo-ring"></div>
				</div>

				<h1 className="main-title">
					<span>Credi</span>
					<span className="accent">Jireh</span>
				</h1>

				<div className="coming-soon-box">
					<div className="coming-soon-label">Próximamente</div>
					<div className="dots-container">
						<span className="dot"></span>
						<span className="dot"></span>
						<span className="dot"></span>
					</div>
				</div>

				<p className="description">
					Estamos desarrollando una plataforma innovadora
					<br />
					para ofrecerte la mejor experiencia en créditos
				</p>

				<div className="progress-wrapper">
					<div className="progress-info">
						<span className="progress-label">Desarrollo en curso</span>
					</div>
					<div className="progress-track">
						<div className="progress-indicator"></div>
					</div>
				</div>

				<div className="benefits-grid">
					<div className="benefit-card">
						<div className="benefit-icon-wrapper">
							<span className="benefit-icon">🚀</span>
						</div>
						<h3>Innovación</h3>
						<p>Tecnología de vanguardia</p>
					</div>
					<div className="benefit-card">
						<div className="benefit-icon-wrapper">
							<span className="benefit-icon">🛡️</span>
						</div>
						<h3>Seguridad</h3>
						<p>Protección de datos</p>
					</div>
					<div className="benefit-card">
						<div className="benefit-icon-wrapper">
							<span className="benefit-icon">💼</span>
						</div>
						<h3>Profesionalismo</h3>
						<p>Servicio confiable</p>
					</div>
				</div>

				<div className="notification-badge">
					<span className="bell-icon">🔔</span>
					<span>Te notificaremos cuando estemos listos</span>
				</div>
			</div>

			<footer className="footer">
				<p>Credi Jireh &copy; {new Date().getFullYear()} | Alcanzando el Éxito</p>
			</footer>
		</div>
	);
}

export default App;