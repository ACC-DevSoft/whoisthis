import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './screens/game/game.component';
import { HomeComponent } from './screens/home/home.component';
import { LoseComponent } from './screens/lose/lose.component';
import { WinComponent } from './screens/win/win.component';
 
const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'game',
        component: GameComponent
    },
    {
        path: 'lose',
        component: LoseComponent,
    },
    {
        path: 'win',
        component: WinComponent,
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
