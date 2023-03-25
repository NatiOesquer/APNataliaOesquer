import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { EducacionComponent } from './components/acerca/educacion/educacion.component';
import { ExperienciaComponent } from './components/acerca/experiencia/experiencia.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillBComponent } from './components/skills/skill-b/skill-b.component';
import { SkillFComponent } from './components/skills/skill-f/skill-f.component';
import { SkillSComponent } from './components/skills/skill-s/skill-s.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InterceptorService } from './services/interceptor.service';
import { AcercaService } from './services/acerca.service';
import { AutenticacionService } from './services/autenticacion.service';
import { EducacionService } from './services/educacion.service';
import { ExperienciaService } from './services/experiencia.service';
import { NavbarService } from './services/navbar.service';
import { ProyectosService } from './services/proyectos.service';
import { SkillsbService } from './services/skillsb.service';
import { SkillsfService } from './services/skillsf.service';
import { SkillssService } from './services/skillss.service';
import { BannerService } from './services/banner.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    AcercaComponent,
    EducacionComponent,
    ExperienciaComponent,
    BannerComponent,
    FooterComponent,
    NavbarComponent,
    PortfolioComponent,
    ProyectosComponent,
    SkillsComponent,
    SkillBComponent,
    SkillFComponent,
    SkillSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule,
  ],
  providers: [
    AcercaService,
    AutenticacionService,
    BannerService,
    EducacionService,
    ExperienciaService,
    NavbarService,
    ProyectosService,
    SkillsbService,
    SkillsfService,
    SkillssService,
    InterceptorService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
