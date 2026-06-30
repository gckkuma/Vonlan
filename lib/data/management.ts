/** Management team — operational leadership listed on the About page (no photos). */
export interface ManagementMember {
  name: string;
  designation: string;
}

export const MANAGEMENT: ManagementMember[] = [
  { name: 'Lalith Adikari', designation: 'Chief Executive Officer' },
  { name: 'Nalin Gilbert', designation: 'Deputy Chief Executive Officer' },
  { name: 'Sajithkumar Balachandran', designation: 'Deputy General Manager' },
  { name: 'Deshapriya Jayasooriya', designation: 'Assistant General Manager' },
  { name: 'Ashanjali Amarasinghe', designation: 'Assistant General Manager – Procurement' },
  { name: 'Samantha Karunarathne', designation: 'Assistant General Manager – Finance' },
  { name: 'Bandula Harischandra', designation: 'Manager – Finance' },
  { name: 'Kanchana Widanagamage', designation: 'Manager – HR' },
  { name: 'Harshana Kothalawala', designation: 'Manager – Special Projects' },
  { name: 'Ravindra Dissanayake', designation: 'Manager – Contract & Marketing' },
  { name: 'Rohana Pathirana', designation: 'Manager – Project' },
  { name: 'Gamini Rajarathne', designation: 'Senior Mechanical Engineer' },
];
