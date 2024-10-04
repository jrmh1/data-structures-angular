import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StudentListComponent } from './components/student-list/student-list.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { FruitListComponent } from './components/fruit-list/fruit-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { CarmodelListComponent } from './components/carmodel-list/carmodel-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { SportsListComponent } from './components/sports-list/sports-list.component';
import { VegetableListComponent } from './components/vegetable-list/vegetable-list.component';
import { AnimalListComponent } from './components/animal-list/animal-list.component';
import { ToolListComponent } from './components/tool-list/tool-list.component';
import { LanguageListComponent } from './components/language-list/language-list.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { SoftwareListComponent } from './components/software-list/software-list.component';
import { MusicPlaylistComponent } from './components/music-playlist/music-playlist.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { ClassroomListComponent } from './components/classroom-list/classroom-list.component';
import { InventoryListComponent } from './components/inventory-list/inventory-list.component';
import { LectureListComponent } from './components/lecture-list/lecture-list.component';
import { StationaryListComponent } from './components/stationary-list/stationary-list.component';
import { FlowerListComponent } from './components/flower-list/flower-list.component';
import { DestinationListComponent } from './components/destination-list/destination-list.component';
import { LaptopListComponent } from './components/laptop-list/laptop-list.component';
import { LaptopspecipicationsListComponent } from './components/laptopspecipications-list/laptopspecipications-list.component';
import { ComputerhardwareListComponent } from './components/computerhardware-list/computerhardware-list.component';
import { MobileappListComponent } from './components/mobileapp-list/mobileapp-list.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { TvshowListComponent } from './components/tvshow-list/tvshow-list.component';
import { FurnitureListComponent } from './components/furniture-list/furniture-list.component';
import { AccessoryListComponent } from './components/accessory-list/accessory-list.component';
import { BuildingListComponent } from './components/building-list/building-list.component';
import { PaintingListComponent } from './components/painting-list/painting-list.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { ComposerListComponent } from './components/composer-list/composer-list.component';
import { PodcastListComponent } from './components/podcast-list/podcast-list.component';
import { ExerciseListComponent } from './components/exercise-list/exercise-list.component';
import { MealplanListComponent } from './components/mealplan-list/mealplan-list.component';
import { BudgetListComponent } from './components/budget-list/budget-list.component';
import { PresentationListComponent } from './components/presentation-list/presentation-list.component';
import { TourListComponent } from './components/tour-list/tour-list.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { DevelopertoolListComponent } from './components/developertool-list/developertool-list.component';
import { FrameworkListComponent } from './components/framework-list/framework-list.component';
import { LibraryListComponent } from './components/library-list/library-list.component';
import { PhonecontactListComponent } from './components/phonecontact-list/phonecontact-list.component';

const routes: Routes = [

  
    { path: 'student-list', component: StudentListComponent},
    { path: 'employee-list', component: EmployeeListComponent},
    { path: 'book-list', component: BookListComponent},
    { path: 'course-list', component: CourseListComponent},
    { path: 'fruit-list', component: FruitListComponent},
    { path: 'city-list', component: CityListComponent},
    { path: 'movie-list', component: MovieListComponent},
    { path: 'carmodel-list', component: CarmodelListComponent},
    { path: 'product-list', component: ProductListComponent},
    { path: 'subject-list', component: SubjectListComponent},
    { path: 'country-list', component: CountryListComponent},
    { path: 'sports-list', component: SportsListComponent},
    { path: 'vegetable-list', component: VegetableListComponent},
    { path: 'animal-list', component: AnimalListComponent},
    { path: 'tool-list', component: ToolListComponent},
    { path: 'language-list', component: LanguageListComponent},
    { path: 'game-list', component: GameListComponent},
    { path: 'software-list', component: SoftwareListComponent},
    { path: 'music-playlist', component: MusicPlaylistComponent},
    { path: 'phonecontact-list', component: PhonecontactListComponent},
    { path: 'food-menu', component: FoodMenuComponent},
    { path: 'grocery-list', component: GroceryListComponent},
    { path: 'classroom-list', component: ClassroomListComponent},
    { path: 'inventory-list', component: InventoryListComponent},
    { path: 'lecture-list', component: LectureListComponent},
    { path: 'stationary-list', component: StationaryListComponent},
    { path: 'flower-list', component: FlowerListComponent},
    { path: 'destination-list', component: DestinationListComponent},
    { path: 'laptop-list', component: LaptopListComponent},
    { path: 'laptopspecipications-list', component: LaptopspecipicationsListComponent},
    { path: 'computerhardware-list', component: ComputerhardwareListComponent},
    { path: 'mobileapp-list', component: MobileappListComponent},
    { path: 'video-list', component: VideoListComponent},
    { path: 'tvshow-list', component: TvshowListComponent},
    { path: 'furniture-list', component: FurnitureListComponent},
    { path: 'accessory-list', component: AccessoryListComponent},
    { path: 'building-list', component: BuildingListComponent},
    { path: 'painting-list', component: PaintingListComponent},
    { path: 'artist-list', component: ArtistListComponent},
    { path: 'composer-list', component: ComposerListComponent},
    { path: 'podcast-list', component: PodcastListComponent},
    { path: 'exercise-list', component: ExerciseListComponent},
    { path: 'mealplan-list', component: MealplanListComponent},
    { path: 'budget-list', component: BudgetListComponent},
    { path: 'presentation-list', component: PresentationListComponent},
    { path: 'tour-list', component: TourListComponent},
    { path: 'event-list', component: EventListComponent},
    { path: 'developertool-list', component: DevelopertoolListComponent},
    { path: 'framework-list', component: FrameworkListComponent},
    { path: 'library-list', component: LibraryListComponent},


  
   
  ];
  
  @NgModule({
    imports: [
      FormsModule,
      CommonModule,
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes, {enableTracing: true}),
    ],
    exports: [RouterModule],
  
    declarations: [
      AppComponent,
      StudentListComponent,
      EmployeeListComponent,
      BookListComponent,
      CityListComponent,
      FruitListComponent,
      CourseListComponent,
      MovieListComponent,
      CarmodelListComponent,
      ProductListComponent,
      SubjectListComponent,
      CountryListComponent,
      SportsListComponent,
      VegetableListComponent,
      AnimalListComponent,
      ToolListComponent,
      LanguageListComponent,
      GameListComponent,
      SoftwareListComponent,
      MusicPlaylistComponent,
      PhonecontactListComponent,
      FoodMenuComponent,
      GroceryListComponent,
      ClassroomListComponent,
      InventoryListComponent,
      LectureListComponent,
      StationaryListComponent,
      FlowerListComponent,
      DestinationListComponent,
      LaptopListComponent,
      LaptopspecipicationsListComponent,
      ComputerhardwareListComponent,
      MobileappListComponent,
      VideoListComponent,
      TvshowListComponent,
      FurnitureListComponent,
      AccessoryListComponent,
      BuildingListComponent,
      PaintingListComponent,
      ArtistListComponent,
      ComposerListComponent,
      PodcastListComponent,
      ExerciseListComponent,
      MealplanListComponent,
      BudgetListComponent,
      PresentationListComponent,
      TourListComponent,
      EventListComponent,
      DevelopertoolListComponent,
      FrameworkListComponent,
      LibraryListComponent



    ],
    providers: [
      provideAnimationsAsync(),
      ],
  
    bootstrap: [
      AppComponent
    ]
  })
  export class AppModule { }