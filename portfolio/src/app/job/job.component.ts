import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Job } from './job.model';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  job: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService) { }

  ngOnInit(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.postsService.getPost(id).subscribe(job => {
      this.job = job;
    });
  }

}
